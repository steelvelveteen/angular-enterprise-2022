import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SublevelBtnLinkComponent } from './sublevel-btn-link.component';

describe('SublevelBtnLinkComponent', () => {
  let component: SublevelBtnLinkComponent;
  let fixture: ComponentFixture<SublevelBtnLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SublevelBtnLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SublevelBtnLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
