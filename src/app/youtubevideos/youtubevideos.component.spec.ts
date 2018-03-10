import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubevideosComponent } from './youtubevideos.component';

describe('YoutubevideosComponent', () => {
  let component: YoutubevideosComponent;
  let fixture: ComponentFixture<YoutubevideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubevideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
