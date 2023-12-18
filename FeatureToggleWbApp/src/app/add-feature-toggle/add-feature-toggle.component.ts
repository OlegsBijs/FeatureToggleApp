import { Component } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Component({
  selector: 'app-add-feature-toggle',
  templateUrl: './add-feature-toggle.component.html',
  styleUrls: ['./add-feature-toggle.component.css']
})
export class AddFeatureToggleComponent {
  newToggle: any = {}; 

  constructor(private featureToggleService: FeatureToggleService) {}

  onSubmit(): void {
    this.featureToggleService.addFeatureToggle(this.newToggle).subscribe(() => {
      this.newToggle = {};
    });
  }
}