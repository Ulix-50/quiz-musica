import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta08Page } from './pergunta08.page';

describe('Pergunta08Page', () => {
  let component: Pergunta08Page;
  let fixture: ComponentFixture<Pergunta08Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
