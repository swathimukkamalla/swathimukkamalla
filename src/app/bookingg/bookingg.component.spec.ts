import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinggComponent } from './bookingg.component';

describe('BookinggComponent', () => {
  let component: BookinggComponent;
  let fixture: ComponentFixture<BookinggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
