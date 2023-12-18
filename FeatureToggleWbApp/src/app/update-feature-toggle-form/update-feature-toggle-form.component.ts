import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureToggleService } from '../services/feature-toggle.service';
import { Observable, combineLatest, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-update-feature-toggle-form',
  templateUrl: './update-feature-toggle-form.component.html',
  styleUrl: './update-feature-toggle-form.component.css'
})
export class UpdateFeatureToggleFormComponent {
  data$: Observable<any> = combineLatest([
    this.route.params.pipe(
      switchMap(params => this.service.getFeatureToggle(params['id'])),
      tap(toggle => {
        this.form = new FormGroup({
          id: new FormControl(
            toggle.id
          ),
          displayName: new FormControl(
            toggle.displayName
          ),
          technicalName: new FormControl(
            toggle.technicalName
          ),
          expiresOn: new FormControl(
            toggle.expiresOn
          ),
          description: new FormControl(
            toggle.description
          ),
          inverted: new FormControl(
            toggle.inverted
          ),
          customerIds: new FormControl(
            toggle.customerIds
          )
        })
      })
    )
  ])
  form: FormGroup = new FormGroup({

  });

  constructor(private route: ActivatedRoute, private service: FeatureToggleService, private router: Router){

  }
updateFeatureToggle(toggle: any){
  this.service.updateFeatureToggle(toggle).subscribe(() => {
    this.router.navigate(['..'],{
      relativeTo: this.route
    })
  });
}
}
