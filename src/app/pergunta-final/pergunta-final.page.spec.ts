import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerguntaFinalPage } from './pergunta-final.page';

describe('PerguntaFinalPage', () => {
  let component: PerguntaFinalPage;
  let fixture: ComponentFixture<PerguntaFinalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerguntaFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
