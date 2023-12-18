import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureToggleListComponent } from './feature-toggle-list/feature-toggle-list.component';
import { AddFeatureToggleComponent } from './add-feature-toggle/add-feature-toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureToggleService } from './services/feature-toggle.service';
import { UpdateFeatureToggleFormComponent } from './update-feature-toggle-form/update-feature-toggle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureToggleListComponent,
    AddFeatureToggleComponent,
    UpdateFeatureToggleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FeatureToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
