import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNavLinkComponent } from './btn-nav-link.component';

describe('BtnNavLinkComponent', () => {
  let component: BtnNavLinkComponent;
  let fixture: ComponentFixture<BtnNavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnNavLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
