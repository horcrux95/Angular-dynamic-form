import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductInsertScreenComponent } from "./product-insert-screen/product-insert-screen.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { RestHandlerService } from "./services/rest-handler.service";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { DynamicFormQuestionComponent } from "./dynamic-form-question/dynamic-form-question.component";
import { QuestionService } from "./services/question.service";
import { AuthGuard } from "./services/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductInsertScreenComponent,
    HomeComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RestHandlerService, QuestionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
