import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotificationsMenuComponent } from './header-notifications-menu.component';

describe('HeaderNotificationsMenuComponent', () => {
  let component: HeaderNotificationsMenuComponent;
  let fixture: ComponentFixture<HeaderNotificationsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNotificationsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNotificationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
