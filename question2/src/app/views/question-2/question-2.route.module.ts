import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionTwoComponent } from './question-2.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionTwoComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionTwoRouteModule { }
