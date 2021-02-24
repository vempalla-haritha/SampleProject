import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutadminComponent } from './logoutadmin.component';

describe('LogoutadminComponent', () => {
  let component: LogoutadminComponent;
  let fixture: ComponentFixture<LogoutadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
