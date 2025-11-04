import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoCategorias } from './selecao-categorias';

describe('SelecaoCategorias', () => {
  let component: SelecaoCategorias;
  let fixture: ComponentFixture<SelecaoCategorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoCategorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoCategorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
