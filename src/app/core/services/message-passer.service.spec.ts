import { TestBed } from '@angular/core/testing';

import { MessagePasserService } from './message-passer.service';

describe('MessagePasserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagePasserService = TestBed.get(MessagePasserService);
    expect(service).toBeTruthy();
  });
});
