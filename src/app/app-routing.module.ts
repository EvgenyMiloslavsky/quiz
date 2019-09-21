import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {QuizCardComponent} from './quiz-card/quiz-card.component';

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'quiz-card', loadChildren: './quiz-card/quiz-card.module#QuizCardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
