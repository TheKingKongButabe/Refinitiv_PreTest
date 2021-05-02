import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionOneComponent } from './views/question-1/question-1.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/question-1/question-1.module'
      ).then((m) => m.QuestionOneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
