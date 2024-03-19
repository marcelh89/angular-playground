
import { computed } from '@angular/core';
import {signalStore, withComputed, withState} from "@ngrx/signals"
import { FormConfig } from './models/form-config.model';
import formJson from './config/wizard-form.config';


type AppState = {
    config: FormConfig;
    currentStepIndex: number
  };
  
  const initialState: AppState = {
    config: formJson,
    currentStepIndex: 0
  };

export const AppStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    
    withComputed(({ config, currentStepIndex }) => ({
        currentStep: computed(() => config().steps[currentStepIndex()])
      }))
      
    );
