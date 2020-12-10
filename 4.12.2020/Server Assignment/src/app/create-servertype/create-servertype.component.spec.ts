import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServertypeComponent } from './create-servertype.component';

describe('CreateServertypeComponent', () => {
  let component: CreateServertypeComponent;
  let fixture: ComponentFixture<CreateServertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
