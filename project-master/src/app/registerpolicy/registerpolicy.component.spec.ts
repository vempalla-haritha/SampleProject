import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpolicyComponent } from './registerpolicy.component';

describe('RegisterpolicyComponent', () => {
  let component: RegisterpolicyComponent;
  let fixture: ComponentFixture<RegisterpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
