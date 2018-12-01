import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevpParticlesComponent } from './devp-particles.component';

describe('DevpParticlesComponent', () => {
  let component: DevpParticlesComponent;
  let fixture: ComponentFixture<DevpParticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpParticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
