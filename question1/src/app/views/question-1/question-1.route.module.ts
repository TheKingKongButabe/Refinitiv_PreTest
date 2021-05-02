import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionOneComponent } from './question-1.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionOneComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionOneRouteModule { }
