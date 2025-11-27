import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubungiKami } from './hubungi-kami';

describe('HubungiKami', () => {
  let component: HubungiKami;
  let fixture: ComponentFixture<HubungiKami>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubungiKami]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubungiKami);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
