import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSystemMenuComponent } from './header-system-menu.component';

describe('HeaderSystemMenuComponent', () => {
  let component: HeaderSystemMenuComponent;
  let fixture: ComponentFixture<HeaderSystemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSystemMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSystemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
