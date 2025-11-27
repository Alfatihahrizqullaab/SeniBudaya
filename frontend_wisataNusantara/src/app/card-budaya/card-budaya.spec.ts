import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBudaya } from './card-budaya';

describe('CardBudaya', () => {
  let component: CardBudaya;
  let fixture: ComponentFixture<CardBudaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBudaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBudaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
