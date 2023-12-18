import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureToggleListComponent } from './feature-toggle-list.component';

describe('FeatureToggleListComponent', () => {
  let component: FeatureToggleListComponent;
  let fixture: ComponentFixture<FeatureToggleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureToggleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureToggleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
