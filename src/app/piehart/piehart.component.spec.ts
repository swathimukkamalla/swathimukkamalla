import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiehartComponent } from './piehart.component';

describe('PiehartComponent', () => {
  let component: PiehartComponent;
  let fixture: ComponentFixture<PiehartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiehartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiehartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
