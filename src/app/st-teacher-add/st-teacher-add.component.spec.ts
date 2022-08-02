import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StTeacherAddComponent } from './st-teacher-add.component';

describe('StTeacherAddComponent', () => {
  let component: StTeacherAddComponent;
  let fixture: ComponentFixture<StTeacherAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StTeacherAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StTeacherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
