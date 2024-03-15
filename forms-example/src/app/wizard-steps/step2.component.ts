import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {FormWizardStepBaseComponent} from "../form-wizard/form-wizard-step-base.component";
import {FormWizardService} from "../form-wizard/form-wizard.service";

@Component({
  selector: 'step2',
  template: `
    <form [formGroup]="form">
      <div>
        <label>College</label>
        <input type="text" formControlName="college">
      </div>
    </form>
  `
})
export class Step2Component extends FormWizardStepBaseComponent {

  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      'college':  new FormControl('', [ Validators.required ])
    };
    super(2, wizardService.getSteps(), true, formcontrols);
  }
}
