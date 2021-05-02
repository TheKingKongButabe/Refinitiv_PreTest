
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionTwoComponent } from './question-2.component';
import { QuestionTwoRouteModule } from './question-2.route.module';



@NgModule({
	declarations: [
		QuestionTwoComponent,

	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		QuestionTwoRouteModule
	],
	entryComponents: [

	],
	providers: [

	]
})
export class QuestionTwoModule {
	constructor(
	) {
	}
}
