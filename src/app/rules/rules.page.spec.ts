import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RulesPage } from './rules.page';

describe('RulesPage', () => {
  let component: RulesPage;
  let fixture: ComponentFixture<RulesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
