import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioDialog } from './horario-dialog';

describe('HorarioDialog', () => {
  let component: HorarioDialog;
  let fixture: ComponentFixture<HorarioDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorarioDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
