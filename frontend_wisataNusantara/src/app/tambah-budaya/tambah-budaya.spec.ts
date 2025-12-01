import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahBudaya } from './tambah-budaya';

describe('TambahBudaya', () => {
  let component: TambahBudaya;
  let fixture: ComponentFixture<TambahBudaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahBudaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahBudaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
