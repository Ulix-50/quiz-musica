import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta04Page } from './pergunta04.page';

describe('Pergunta04Page', () => {
  let component: Pergunta04Page;
  let fixture: ComponentFixture<Pergunta04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
