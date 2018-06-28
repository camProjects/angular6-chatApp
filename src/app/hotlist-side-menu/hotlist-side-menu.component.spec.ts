import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistSideMenuComponent } from './hotlist-side-menu.component';

describe('HotlistSideMenuComponent', () => {
  let component: HotlistSideMenuComponent;
  let fixture: ComponentFixture<HotlistSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotlistSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlistSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
