import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListEditComponent } from './table-list-edit.component';

describe('TableListEditComponent', () => {
  let component: TableListEditComponent;
  let fixture: ComponentFixture<TableListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
