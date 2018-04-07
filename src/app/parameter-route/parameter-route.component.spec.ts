import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterRouteComponent } from './parameter-route.component';

describe('ParameterRouteComponent', () => {
  let component: ParameterRouteComponent;
  let fixture: ComponentFixture<ParameterRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
