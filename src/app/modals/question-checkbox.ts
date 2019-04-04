import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  type: string;
  checked: boolean;

  constructor(options: any = {}) {
    super(options);
    this.type = 'checkbox';
    this.checked = (options.value=='False')? false: true;
    this.value = this.checked.toString();
  }
}