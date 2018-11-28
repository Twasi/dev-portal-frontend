import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPluginSetupComponent } from './new-plugin-setup.component';

describe('NewPluginSetupComponent', () => {
  let component: NewPluginSetupComponent;
  let fixture: ComponentFixture<NewPluginSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPluginSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPluginSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
