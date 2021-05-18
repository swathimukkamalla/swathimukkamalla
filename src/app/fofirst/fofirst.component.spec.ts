import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FofirstComponent } from './fofirst.component';

describe('FofirstComponent', () => {
  let component: FofirstComponent;
  let fixture: ComponentFixture<FofirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FofirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FofirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
