import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, HostBinding, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormWizardStepDirective } from './form-wizard-step.directive';
import { IWizardStep } from './form-wizard.model';
import { FormWizardService } from './form-wizard.service';
import { Subscription } from 'rxjs';
import { FormWizardStepBaseComponent } from './form-wizard-step-base.component';

@Component({
  selector: 'ngx-form-wizard',
  templateUrl: './form-wizard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-form-wizard'
  }
})
export class FormWizardComponent implements OnInit, OnDestroy {

  @Input() steps: IWizardStep[] = [];

  @Input() prevActionBtnLabel: string = 'Previous';
  @Input() nextActionBtnLabel: string = 'Next';
  @Input() finishActionBtnLabel: string = 'Finish';
  @Input() cancelActionBtnLabel: string = 'Cancel';

  @Output() finished: EventEmitter<void> = new EventEmitter();
  @Output() cancelled: EventEmitter<void> = new EventEmitter();

  @ViewChild(FormWizardStepDirective, { static: true }) wizardStep!: FormWizardStepDirective;

  noOfSteps: number = 0;
  activeStep: number = 0;
  isLastStep: boolean = false;
  isFirstStep: boolean = true;
  activeStepInfo: IWizardStep = <IWizardStep>{};
  componentChangesSub: Subscription | undefined;

  constructor(private wizardService: FormWizardService) {}

  ngOnInit(): void {
    this.wizardInit();
  }

  ngOnDestroy(): void {
    this.componentChangesSub?.unsubscribe();
    this.wizardStep?.viewContaianerRef?.clear();
  }

  goToPrevStep(): void {
    if (this.activeStep > 1) {
      const prevStep = this.steps[(--this.activeStep) - 1];
      this.activeStepInfo = prevStep;
      this.updateWizard();
    }
  }

  goToNextStep(): void {
    if (this.activeStep < this.noOfSteps) {
      const nextStep = this.steps[this.activeStep++];
      this.activeStepInfo = nextStep;
      this.updateWizard();
    }
  }

  finishWizard(): void {
    this.finished.emit();
  }

  cancelWizard(): void {
    this.cancelled.emit();
  }

  handleStepperClick(step: IWizardStep): void {
    if (step.id >= this.activeStep) {
      return;
    }

    const newActiveStep = this.steps[step.id - 1];
    this.activeStep = step.id;
    this.activeStepInfo = newActiveStep;
    this.updateWizard();
  }

  /************************* Private Methods **************************************/

  private wizardInit() {
    if (this.steps?.length) {
      this.wizardService.setSteps(this.steps);
      this.activeStep = 1;
      this.noOfSteps = this.steps.length;
      this.activeStepInfo = this.steps[0];
      this.isFirstStep = true;
      this.isLastStep = false;
      this.loadWizardStep();
    }
  }

  private loadWizardStep(): void {
    const viewContaianerRef = this.wizardStep.viewContaianerRef;
    viewContaianerRef.clear();
    const componentRef = viewContaianerRef.createComponent<FormWizardStepBaseComponent>(this.activeStepInfo?.component);
    this.stepComponentInit(componentRef.instance);
  }

  private stepComponentInit(component: FormWizardStepBaseComponent): void {
    // Initialize component input properties
    component.stepNo = this.activeStepInfo.id;
    component.steps = this.steps;

    if (component.isFormNeeded && component.form) {
      component.form.patchValue(this.activeStepInfo.data);
      this.componentChangesSub = component.form?.valueChanges.subscribe({
        next: data => this.handleFormValueChanges(data, component)
      });
    }
  }

  private handleFormValueChanges(data: any, component: FormWizardStepBaseComponent): void {
    if (component.steps.length && component.form) {
      const stepConfig = component.getCurrentStepInfo();
      stepConfig.dataValidated = component.form.valid;
      stepConfig.data = data;
    }
  }

  private updateWizard(): void {
    this.componentChangesSub?.unsubscribe();
    this.loadWizardStep();
    if (this.activeStep <= 1) {
      this.isFirstStep = true;
      this.isLastStep = false;
    } else if (this.activeStep >= this.noOfSteps) {
      this.isFirstStep = false;
      this.isLastStep = true;
    } else {
      this.isFirstStep = false;
      this.isLastStep = false;
    }
  }
}
