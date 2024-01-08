import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta02Page } from './pergunta02.page';

describe('Pergunta02Page', () => {
  let component: Pergunta02Page;
  let fixture: ComponentFixture<Pergunta02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
