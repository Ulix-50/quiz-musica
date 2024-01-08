import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta01Page } from './pergunta01.page';

describe('Pergunta01Page', () => {
  let component: Pergunta01Page;
  let fixture: ComponentFixture<Pergunta01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
