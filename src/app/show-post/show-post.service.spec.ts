import { TestBed, inject } from '@angular/core/testing';

import { ShowPostService } from './show-post.service';

describe('ShowPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowPostService]
    });
  });

  it('should be created', inject([ShowPostService], (service: ShowPostService) => {
    expect(service).toBeTruthy();
  }));
});
