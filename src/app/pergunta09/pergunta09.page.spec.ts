import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta09Page } from './pergunta09.page';

describe('Pergunta09Page', () => {
  let component: Pergunta09Page;
  let fixture: ComponentFixture<Pergunta09Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta09Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
