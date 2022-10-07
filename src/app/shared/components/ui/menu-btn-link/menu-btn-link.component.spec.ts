import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBtnLinkComponent } from './menu-btn-link.component';

describe('MenuBtnLinkComponent', () => {
  let component: MenuBtnLinkComponent;
  let fixture: ComponentFixture<MenuBtnLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBtnLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBtnLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
