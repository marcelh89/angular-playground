
import { computed } from '@angular/core';
import {signalStore, withComputed, withMethods, withState, patchState} from "@ngrx/signals"
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormConfig, FieldConfig } from './multistep-form.model';
import formJson from './multistep-form.config';
import { initValidators } from './multistep-form.utils';

type AppState = {
    config: FormConfig;
    currentStepIndex: number
    stepForms: FormGroup[],
    fb: FormBuilder
    confirmationStep: boolean,
    finalFormData: {} | undefined
};


function removeNull(obj: any) {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') removeNull(obj[key]);
    else if (obj[key] === null) delete obj[key];
  });
  return obj;
}

// <------ move in utils?!

const fb = new FormBuilder()
const initialState: AppState = {
  finalFormData: undefined,
  config: formJson,
  currentStepIndex: 0,
  confirmationStep: false,
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
    
    withComputed(({ config, currentStepIndex, stepForms, confirmationStep }) => ({
        currentStep: computed(() => config().steps[currentStepIndex()]),
        formGroup: computed(() => stepForms()[currentStepIndex()]),
      })),

    withMethods((store) => ({

      // TODO implement with validation logic
      selectStep(step: Number){
        console.log("not implemented yet")
      },
      
      isNextStepAccessible() {
        return store.stepForms()[store.currentStepIndex()].valid
      },

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
      },

      submitForm() {

        // collect all form data
        let finalFormData: any = {}

        store.stepForms().forEach(step => {

          for (let controlKey of Object.keys(step.controls)){
            finalFormData[controlKey] = step.controls[controlKey].value
          }
          
        })

        // filter finalFormData by removing null values
        finalFormData = removeNull(finalFormData)
        
        patchState(store, (state) => ({ confirmationStep: true, finalFormData}));

      }

    }))
      
)
