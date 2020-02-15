import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { debounce, delay, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  private sizeChanged: Subject<boolean>;
  sizeChangedDebounced;

  loaded = false;
  items: number[] = [...Array(25).keys()];
  page = 0;

  @ViewChild('carousel', { static: true }) carousel: ElementRef;
  @ViewChild('carouselContainer', { static: true }) carouselContainer: ElementRef;
  @ViewChild('carouselItems', { static: true }) carouselItemsContainer: ElementRef;
  @ViewChildren('carouselItem') carouselItems: QueryList<ElementRef>;

  @ViewChild('scrollThumb', { static: true }) scrollThumb: ElementRef;

  constructor() {}

  ngOnInit() {
    this.sizeChanged = new Subject<boolean>();
    this.sizeChangedDebounced = this.sizeChanged.pipe(debounce(() => interval(100)));
    this.sizeChangedDebounced.subscribe(() => {
      this.setWidth();
    });
  }

  ngAfterViewInit(): void {
    of()
      .pipe(
        startWith(null),
        delay(0),
        tap(() => (this.loaded = true))
      )
      .subscribe(() => {
        this.setWidth();
      });
  }

  setup(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.sizeChanged.next(true);
  }

  setWidth(): void {
    if (!this.loaded || !this.carouselItemsContainer) {
      return;
    }

    const container = this.carouselItemsContainer.nativeElement;
    container.style.left = null;
    container.style.width = null;
    container.style.width = this.computeItemWidth() * this.numItems + 'px';

    const thumbWidth = this.carouselContainer.nativeElement.offsetWidth / this.numPages;
    this.scrollThumb.nativeElement.style.width = thumbWidth + 'px';
    this.reCalcLeft();
  }

  get numItems(): number {
    return +(this.loaded && this.carouselItems && this.carouselItems.length);
  }

  get numItemsVisible(): number {
    if (!this.loaded || !this.carouselItems) {
      return 0;
    }
    const carouselWidth = this.carouselContainer.nativeElement.offsetWidth;
    const itemWidth = this.computeItemWidth();
    return Math.floor(carouselWidth / itemWidth);
  }

  get numPages(): number {
    if (!this.loaded || !this.carouselItems) {
      return 0;
    }
    const carouselWidth = this.carouselContainer.nativeElement.offsetWidth;
    const itemWidth = this.computeItemWidth();
    const itemsPerScreen = Math.floor(carouselWidth / itemWidth);

    return Math.ceil(this.carouselItems.length / itemsPerScreen);
  }

  private computeItemWidth(): number {
    const item: HTMLElement = this.carouselItems.first.nativeElement;
    const itemWidth: number = item.offsetWidth;
    const styles = getComputedStyle(item);
    const leftMargin = parseInt(styles.marginLeft, 10);
    const rightMargin = parseInt(styles.marginRight, 10);

    return itemWidth + leftMargin + rightMargin;
  }

  onLeftClick(): void {
    if (this.page === 0) {
      return;
    }

    this.page--;
    this.reCalcLeft();
  }

  onRightClick() {
    if (this.page === this.numPages - 1) {
      return;
    }

    this.page++;
    this.reCalcLeft();
  }

  private reCalcLeft(): void {
    const itemsContainer = this.carouselItemsContainer.nativeElement;
    itemsContainer.style.left = -this.computeItemWidth() * this.numItemsVisible * this.page + 'px';

    const thumbWidth = this.carouselContainer.nativeElement.offsetWidth / this.numPages;
    this.scrollThumb.nativeElement.style.left = this.page * thumbWidth + 'px';
  }
}
