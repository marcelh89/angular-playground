
import { computed } from '@angular/core';
import {signalStore, withComputed, withMethods, withState, patchState} from "@ngrx/signals"
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { FormConfig, FieldConfig } from './models/form-config.model';
import formJson from './config/wizard-form.config';

type AppState = {
    config: FormConfig;
    currentStepIndex: number
    stepForms: FormGroup[],
    fb: FormBuilder
};

// TODO --> move in utils?!
function initValidators(field: FieldConfig) {
  const validators = [];

  if (field.validators) {
    for (const validator of field.validators) {
      switch (validator) {
        case 'required':
          validators.push(Validators.required);
          break;
        // Here you can handle other validators like '>= 18 Jahre?'
      }
    }
  }

  return validators;
  
}

// <------ move in utils?!

const fb = new FormBuilder()
const initialState: AppState = {
  config: formJson,
  currentStepIndex: 0,
  stepForms: formJson.steps.map(step => {
    
    const formGroup = fb.group({})
    
    // collect all form Controls and apply validators
    step.rows.forEach((row) => {
      row.columns.forEach(col => {
        col.fields.forEach(field => {
          const control: FormControl = new FormControl();
          control.addValidators(initValidators(field))
          formGroup.addControl(field.name, control);
        })
       
      })
    })

    return formGroup
  } ),
  fb
};

console.log("initialState", initialState)


export const AppStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    
    withComputed(({ config, currentStepIndex, stepForms }) => ({
        currentStep: computed(() => config().steps[currentStepIndex()]),
        isNextStepAccessible: computed(() => stepForms()[currentStepIndex()].valid),
        formGroup: computed(() => stepForms()[currentStepIndex()]),
      })),

    withMethods((store) => ({

      goToNextStep() {
        // Check if current form is valid before proceeding
        if (store.stepForms()[store.currentStepIndex()].valid) {
          patchState(store, (state) => ({ currentStepIndex: store.currentStepIndex()+1 }));
        }
      },
    
      // Function to navigate to previous step
      goToPreviousStep() {
        patchState(store, (state) => ({ currentStepIndex: Math.max(0, store.currentStepIndex() - 1) }));


      },

      isRequired(field: FieldConfig): boolean {

        let matchedControl: FormControl | undefined = undefined;

        for(let formGroup of store.stepForms()){
          if(formGroup.controls[field.name])
            matchedControl = (formGroup.controls[field.name] as FormControl);
            if(matchedControl?.hasValidator(Validators.required))
              return true
        }

        return false;
      }

    }))
      
)
