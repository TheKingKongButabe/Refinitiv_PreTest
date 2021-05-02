
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionOneComponent } from './question-1.component';
import { QuestionOneRouteModule } from './question-1.route.module';



@NgModule({
	declarations: [
		QuestionOneComponent,

	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		QuestionOneRouteModule
	],
	entryComponents: [

	],
	providers: [

	]
})
export class QuestionOneModule {
	constructor(
	) {
	}
}
