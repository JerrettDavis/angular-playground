import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { debounce, delay, startWith, tap } from 'rxjs/operators';
import { CarouselItem } from './carousel-item.component';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, AfterContentChecked {
  private sizeChanged: Subject<boolean>;
  private sizeChangedDebounced;

  private loaded = false;
  private page = 0;
  private visible = false;

  @Input('diagnostics') showDiagnostics: boolean;

  @ViewChild('carousel', { static: true }) carousel: ElementRef;
  @ViewChild('carouselContainer', { static: true }) carouselContainer: ElementRef;
  @ViewChild('carouselItems', { static: true }) carouselItemsContainer: ElementRef;
  @ContentChildren(CarouselItem, { descendants: true }) carouselItems: QueryList<CarouselItem>;

  @ViewChild('scrollThumb', { static: true }) scrollThumb: ElementRef;

  constructor() {}

  ngOnInit() {
    this.sizeChanged = new Subject<boolean>();
    this.sizeChangedDebounced = this.sizeChanged.pipe(debounce(() => interval(100)));
    this.sizeChangedDebounced.subscribe(() => {
      this.redraw();
    });
  }

  public ngAfterViewInit(): void {
    of()
      .pipe(
        startWith(null),
        delay(0),
        tap(() => (this.loaded = true))
      )
      .subscribe(() => {
        this.setVisibility();
        this.redraw();
      });
  }

  public ngAfterContentChecked(): void {
    this.setVisibility();
  }

  private setVisibility(): void {
    if (!this.visible && this.carouselContainer.nativeElement.offsetParent != null) {
      this.visible = true;
      this.redraw();
    } else if (this.visible && this.carouselContainer.nativeElement.offsetParent === null) {
      this.visible = false;
    }
  }

  get diagnostics() {
    return JSON.stringify({
      isLoaded: this.loaded,
      isVisible: this.visible,
      numPages: this.numPages,
      curPage: this.curPage,
      numItems: this.numItems,
      numItemsVisible: this.numItemsVisible
    });
  }

  @HostListener('window:resize')
  public onResize() {
    this.sizeChanged.next(true);
  }

  public redraw(): void {
    if (!this.visible) {
      return;
    }
    this.setWidth();
    this.reCalcLeft();
  }

  private setWidth(): void {
    if (!this.visible || !this.loaded || !this.carouselItemsContainer) {
      return;
    }
    console.log('setWidth() Called');
    const container = this.carouselItemsContainer.nativeElement;
    container.style.left = null;
    container.style.width = null;
    container.style.width = this.computeItemWidth() * this.numItems + 'px';

    const thumbWidth = this.carouselContainer.nativeElement.offsetWidth / this.numPages;
    this.scrollThumb.nativeElement.style.width = thumbWidth + 'px';
  }

  private reCalcLeft(): void {
    if (!this.visible || !this.loaded) {
      return;
    }
    const itemsContainer = this.carouselItemsContainer.nativeElement;
    itemsContainer.style.left = -this.computeItemWidth() * this.numItemsVisible * this.page + 'px';

    const thumbWidth = this.carouselContainer.nativeElement.offsetWidth / this.numPages;
    this.scrollThumb.nativeElement.style.left = this.page * thumbWidth + 'px';
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

  get curPage(): number {
    return this.page;
  }

  private computeItemWidth(): number {
    const item: HTMLElement = this.carouselItems.first.elementRef.nativeElement;
    const itemWidth: number = item.offsetWidth;
    const styles = getComputedStyle(item);
    const leftMargin = parseInt(styles.marginLeft, 10);
    const rightMargin = parseInt(styles.marginRight, 10);

    return itemWidth + leftMargin + rightMargin;
  }

  public onLeftClick(): void {
    if (this.page === 0) {
      return;
    }

    this.page--;
    this.reCalcLeft();
  }

  public onRightClick(): void {
    if (this.page === this.numPages - 1) {
      return;
    }

    this.page++;
    this.reCalcLeft();
  }
}
