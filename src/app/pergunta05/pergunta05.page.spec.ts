import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta05Page } from './pergunta05.page';

describe('Pergunta05Page', () => {
  let component: Pergunta05Page;
  let fixture: ComponentFixture<Pergunta05Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
