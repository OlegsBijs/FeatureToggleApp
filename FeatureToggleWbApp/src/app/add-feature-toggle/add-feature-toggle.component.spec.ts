import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeatureToggleComponent } from './add-feature-toggle.component';

describe('AddFeatureToggleComponent', () => {
  let component: AddFeatureToggleComponent;
  let fixture: ComponentFixture<AddFeatureToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFeatureToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFeatureToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
