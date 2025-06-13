import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsultationComponent } from './view-encapsultation.component';

describe('ViewEncapsultationComponent', () => {
  let component: ViewEncapsultationComponent;
  let fixture: ComponentFixture<ViewEncapsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
