import { Component, OnInit } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Component({
  selector: 'app-feature-toggle-list',
  templateUrl: './feature-toggle-list.component.html',
  styleUrls: ['./feature-toggle-list.component.css']
})
export class FeatureToggleListComponent implements OnInit {
  featureToggles: any[] = [];
  updatedToggle: any = {};

  constructor(private featureToggleService: FeatureToggleService) {}

  ngOnInit(): void {
    this.refreshFeatureToggles();
  }

  refreshFeatureToggles(): void {
    this.featureToggleService.getFeatureToggles().subscribe(toggles => {
      this.featureToggles = toggles;
    });
  }

  archiveFeatureToggle(id: number): void {
    this.featureToggleService.archiveFeatureToggle(id).subscribe(() => {
      this.refreshFeatureToggles();
    });
  }
}