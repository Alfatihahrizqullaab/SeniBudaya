import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahEvent } from './tambah-event';

describe('TambahEvent', () => {
  let component: TambahEvent;
  let fixture: ComponentFixture<TambahEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
