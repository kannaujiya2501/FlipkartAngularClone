import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDispComponent } from './feedback-disp.component';

describe('FeedbackDispComponent', () => {
  let component: FeedbackDispComponent;
  let fixture: ComponentFixture<FeedbackDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackDispComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
