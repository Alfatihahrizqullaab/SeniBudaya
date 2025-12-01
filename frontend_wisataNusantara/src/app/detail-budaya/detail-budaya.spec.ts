import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBudaya } from './detail-budaya';

describe('DetailBudaya', () => {
  let component: DetailBudaya;
  let fixture: ComponentFixture<DetailBudaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBudaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBudaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
