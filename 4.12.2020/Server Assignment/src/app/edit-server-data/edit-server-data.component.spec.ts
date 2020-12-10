import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServerDataComponent } from './edit-server-data.component';

describe('EditServerDataComponent', () => {
  let component: EditServerDataComponent;
  let fixture: ComponentFixture<EditServerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
