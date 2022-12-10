import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarihubLogoNavbarComponent } from './marihub-logo-navbar.component';

describe('MarihubLogoNavbarComponent', () => {
  let component: MarihubLogoNavbarComponent;
  let fixture: ComponentFixture<MarihubLogoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarihubLogoNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarihubLogoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
