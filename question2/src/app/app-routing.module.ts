import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionTwoComponent } from './views/question-2/question-2.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/question-2/question-2.module'
      ).then((m) => m.QuestionTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
