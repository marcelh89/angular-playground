import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
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
            <label>Salutation
              @if (this.formcontrols.salutation?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <select formControlName="salutation">
              <option>Mr</option>
              <option>Mrs</option>
            </select>
          </div>
          <div class="form-group flex">
            <label>Name
              @if (this.formcontrols.name?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="text" formControlName="name">
          </div>
          <div class="form-group flex">
            <label>Prename
              @if (this.formcontrols.prename?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="text" formControlName="prename">
          </div>
          <div class="form-group flex">
            <label>Birthdate
              @if (this.formcontrols.birthdate?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="date" formControlName="birthdate"/>
          </div>
        </div>
        <div class="half-containers">

          <div class="form-group flex">
            <label>Title
              @if (this.formcontrols.title?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <select formControlName="title">
              <option>One</option>
              <option>Two</option>
            </select>
          </div>

          <div class="form-group flex">
            <label>Name Suffix
              @if (this.formcontrols.namesuffix?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="text" formControlName="namesuffix">
          </div>

        </div>

      </div>

      <hr/>

      <h5 class="flexcol">Address</h5>
      <div class="flex">
        <div class="half-containers">
          <div class="form-group flex">
            <label>Street
              @if (this.formcontrols.street?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="text" formControlName="street">
          </div>
          <div class="form-group flex">
            <label>Zip code
              @if (this.formcontrols.zipcode?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="text" formControlName="zipcode">
          </div>
        </div>

        <div class="half-containers">

          <div class="form-group flex">
            <label>House number
              @if (this.formcontrols.housenumber?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="number" formControlName="housenumber">
          </div>

          <div class="form-group flex">
            <label>Location
              @if (this.formcontrols.location?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <input type="text" formControlName="location">
          </div>

          <div class="form-group flex">
            <label>Country
              @if (this.formcontrols.country?.hasValidator(Validators.required)) {
                <span>*</span>
              }
            </label>
            <select formControlName="country">
              <option disabled selected value> -- select --</option>
              <option>Germany</option>
              <option>Austria</option>
            </select>
          </div>

        </div>

      </div>


    </form>
  `
})
export class Step1Component extends FormWizardStepBaseComponent {

  formcontrols: any;

  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      'name': new FormControl('', [Validators.required]),
      'salutation': new FormControl('', [Validators.required]),
      'prename': new FormControl('', []),
      'birthdate': new FormControl('', []),
      'street': new FormControl('', []),
      'namesuffix': new FormControl('', []),
      'title': new FormControl('', []),
      'housenumber': new FormControl('', []),
      'location': new FormControl('', []),
      'zipcode': new FormControl('', []),
      'country': new FormControl('', []),
    };
    super(1, wizardService.getSteps(), true, formcontrols);
    this.formcontrols = formcontrols;
  }

  protected readonly Validators = Validators;
}
