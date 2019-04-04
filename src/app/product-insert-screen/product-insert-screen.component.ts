import { Component, OnInit } from "@angular/core";
import { RestHandlerService } from "../services/rest-handler.service";
import { QuestionService } from "../services/question.service";
import { TextboxQuestion } from "../modals/question-text";
import { CheckboxQuestion } from "../modals/question-checkbox";
import { NumberboxQuestion } from "../modals/question-int";

@Component({
  selector: "app-product-insert-screen",
  templateUrl: "./product-insert-screen.component.html",
  styleUrls: ["./product-insert-screen.component.css"]
})
export class ProductInsertScreenComponent implements OnInit {

  definition: any;
  questions: any[]=[];

  constructor(private _rh: RestHandlerService, private _qs: QuestionService) {}

  ngOnInit() {
    
    this.definition = this._rh.getDefinition();

    for (let def of this.definition) {

      if (def.type == "text") {
        this.questions.push(
          new TextboxQuestion({
            key: def.caption,
            label: def.caption,
            value: def.defaultValue,
            required: def.mandatory,
            validationMessage:def.validationMessage
          })
        );
      }

      if (def.type == "int") {
        this.questions.push(
          new NumberboxQuestion({
            key: def.caption,
            label: def.caption,
            value: def.defaultValue,
            required: def.mandatory,
            validationMessage:def.validationMessage
          })
        );
      }

      if (def.type == "bool") {
        this.questions.push(
          new CheckboxQuestion({
            key: def.caption,
            label: def.caption,
            value: def.defaultValue,
            required: def.mandatory,
            validationMessage:def.validationMessage
          })
        );
      }

    }
    this._qs.setQuestions(this.questions);
    this.questions = this._qs.getQuestions();
    
  }
}
