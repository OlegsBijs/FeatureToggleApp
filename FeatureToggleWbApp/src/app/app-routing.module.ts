import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeatureToggleComponent } from './add-feature-toggle/add-feature-toggle.component';
import { FeatureToggleListComponent } from './feature-toggle-list/feature-toggle-list.component';
import { UpdateFeatureToggleFormComponent } from './update-feature-toggle-form/update-feature-toggle-form.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddFeatureToggleComponent
  },
  {
    path: 'toggles',
    children: [
      {
        path: '',
        component: FeatureToggleListComponent,
      },
      {
        path: ':id',
        component: UpdateFeatureToggleFormComponent,
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
