import { Injectable } from "@angular/core";

import { QuestionBase } from "../modals/question-base";
import { TextboxQuestion } from "../modals/question-text";
import { CheckboxQuestion } from "../modals/question-checkbox";

@Injectable()
export class QuestionService {
  questions: QuestionBase<any>[] = [];
  getQuestions() {
    return this.questions;
  }

  setQuestions(obj) {
    this.questions = obj;
  }
}
