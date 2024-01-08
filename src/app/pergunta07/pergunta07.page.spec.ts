import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pergunta07Page } from './pergunta07.page';

describe('Pergunta07Page', () => {
  let component: Pergunta07Page;
  let fixture: ComponentFixture<Pergunta07Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pergunta07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
