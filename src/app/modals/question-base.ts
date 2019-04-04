export class QuestionBase<T> {
    public value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    validationMessage:string;
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        validationMessage?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      
      if(this.required==true){
        this.validationMessage= options.validationMessage || '';
      }
    }
  }