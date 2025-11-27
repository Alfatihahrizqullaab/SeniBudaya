import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budaya } from './budaya';

describe('Budaya', () => {
  let component: Budaya;
  let fixture: ComponentFixture<Budaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Budaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Budaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
