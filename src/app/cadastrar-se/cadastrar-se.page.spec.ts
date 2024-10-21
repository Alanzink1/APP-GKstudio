import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarSePage } from './cadastrar-se.page';

describe('CadastrarSePage', () => {
  let component: CadastrarSePage;
  let fixture: ComponentFixture<CadastrarSePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
