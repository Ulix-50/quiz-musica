import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta06Page } from './pergunta06.page';

describe('Pergunta06Page', () => {
  let component: Pergunta06Page;
  let fixture: ComponentFixture<Pergunta06Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
