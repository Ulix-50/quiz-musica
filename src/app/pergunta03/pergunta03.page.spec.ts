import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta03Page } from './pergunta03.page';

describe('Pergunta03Page', () => {
  let component: Pergunta03Page;
  let fixture: ComponentFixture<Pergunta03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
