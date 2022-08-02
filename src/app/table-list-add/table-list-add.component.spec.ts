import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListAddComponent } from './table-list-add.component';

describe('TableListAddComponent', () => {
  let component: TableListAddComponent;
  let fixture: ComponentFixture<TableListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
