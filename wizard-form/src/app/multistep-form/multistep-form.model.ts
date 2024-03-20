export interface FormConfig {
    messages: {
      [key: string]: string;
    };
    steps: StepConfig[];
  }
  
  export interface StepConfig {
    id: number;
    title: string;
    rows: RowConfig[];
    'button.abort': string;
    'button.next': string;
  }
  
  export interface RowConfig {
    title: string;
    columns: ColumnConfig[];
  }
  
  export interface ColumnConfig {
    id: number
    fields: FieldConfig[];
  }
  
  export interface FieldConfig {
    type: string;
    options?: any[];
    name: string;
    label: string;
    placeholder: string;
    validators: string[];
  }