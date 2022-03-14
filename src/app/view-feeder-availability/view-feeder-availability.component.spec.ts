import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeederAvailabilityComponent } from './view-feeder-availability.component';

describe('ViewFeederAvailabilityComponent', () => {
  let component: ViewFeederAvailabilityComponent;
  let fixture: ComponentFixture<ViewFeederAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeederAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeederAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
