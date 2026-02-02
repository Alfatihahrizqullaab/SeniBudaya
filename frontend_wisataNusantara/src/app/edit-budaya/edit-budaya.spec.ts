import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudaya } from './edit-budaya';

describe('EditBudaya', () => {
  let component: EditBudaya;
  let fixture: ComponentFixture<EditBudaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBudaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBudaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
