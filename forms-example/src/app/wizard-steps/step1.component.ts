import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {FormWizardStepBaseComponent} from "../form-wizard/form-wizard-step-base.component";
import {FormWizardService} from "../form-wizard/form-wizard.service";

@Component({
  selector: 'step1',
  template: `
    <form [formGroup]="form">
      <h5 class="flexcol">Personal</h5>
      <div class="flex">
        <div class="half-containers">
          <div class="form-group flex">
            <label>Salutation</label>
            <select formControlName="salutation">
              <option>Mr</option>
              <option>Mrs</option>
            </select>
          </div>
          <div class="form-group flex">
            <label>Name</label>
            <input type="text" formControlName="name">
          </div>
          <div class="form-group flex">
            <label>Prename</label>
            <input type="text" formControlName="prename">
          </div>
          <div class="form-group flex">
            <label>Birthdate</label>
            <input type="date" formControlName="birthdate"/>
          </div>
        </div>
        <div class="half-containers">

          <div class="form-group flex">
            <label>Title</label>
            <select>
              <option>One</option>
              <option>Two</option>
            </select>
          </div>

          <div class="form-group flex">
            <label>Name Suffix</label>
            <input type="text" formControlName="name suffix">
          </div>

        </div>

      </div>

      <hr/>

      <h5 class="flexcol">Address</h5>
      <div class="flex">
        <div class="half-containers">
          <div class="form-group flex">
            <label>Street</label>
            <input type="text" formControlName="street">
          </div>
          <div class="form-group flex">
            <label>Zip code</label>
            <input type="text" formControlName="zipcode">
          </div>
        </div>

        <div class="half-containers">

          <div class="form-group flex">
            <label>House number</label>
            <input type="number">
          </div>

          <div class="form-group flex">
            <label>Location</label>
            <input type="text" formControlName="location">
          </div>

          <div class="form-group flex">
            <label>Country</label>
            <select>
              <option disabled selected value> -- select -- </option>
s              <option>Germany</option>
              <option>Austria</option>
            </select>
          </div>

        </div>

      </div>


    </form>
  `
})
export class Step1Component extends FormWizardStepBaseComponent {

  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      'name':  new FormControl('', [ Validators.required ]),
      'salutation':  new FormControl('', [ Validators.required ]),
      'prename':  new FormControl('', [ Validators.required ]),
      'birthdate':  new FormControl('', [ Validators.required ]),

    };
    super(1, wizardService.getSteps(), true, formcontrols);
  }

}
