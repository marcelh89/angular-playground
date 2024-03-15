import { Component } from "@angular/core";
import {FormWizardStepBaseComponent} from "../form-wizard/form-wizard-step-base.component";
import {IWizardStep} from "../form-wizard/form-wizard.model";
import {FormWizardService} from "../form-wizard/form-wizard.service";

@Component({
  selector: 'step4',
  template: `
    <div>
      <ng-container *ngFor="let item of prevSteps">
        <label>{{ item.title }}</label>
        <pre>{{ item.data | json }}</pre>
      </ng-container>
    </div>
  `
})
export class Step4Component extends FormWizardStepBaseComponent {

  prevSteps: IWizardStep[] = [];

  constructor(private wizardService: FormWizardService) {
    super(4, wizardService.getSteps());
    this.prevSteps = this.steps.slice(0, this.stepNo);
  }

}
