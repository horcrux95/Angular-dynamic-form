import { QuestionBase } from './question-base';

export class NumberboxQuestion extends QuestionBase<Number> {
  controlType = 'number';
  type: string='number';

  constructor(options: {} = {}) {
    super(options);
  }
}