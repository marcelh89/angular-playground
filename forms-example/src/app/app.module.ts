import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './wizard-steps/step1.component';
import { Step2Component } from './wizard-steps/step2.component';
import { Step3Component } from './wizard-steps/step3.component';
import { Step4Component } from './wizard-steps/step4.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormWizardModule} from "./form-wizard/form-wizard.module";

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
