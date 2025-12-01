import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarEvent } from './daftar-event';

describe('DaftarEvent', () => {
  let component: DaftarEvent;
  let fixture: ComponentFixture<DaftarEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
