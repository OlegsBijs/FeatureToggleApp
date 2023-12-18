import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFeatureToggleFormComponent } from './update-feature-toggle-form.component';

describe('UpdateFeatureToggleFormComponent', () => {
  let component: UpdateFeatureToggleFormComponent;
  let fixture: ComponentFixture<UpdateFeatureToggleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFeatureToggleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFeatureToggleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
