import { NgModule } from '@angular/core';
import {QuizCardComponent} from './quiz-card.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

export const ROUTES: Routes = [
  {path: '', component: QuizCardComponent}
];

@NgModule({
  declarations: [
    QuizCardComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
  ]
})
export class QuizCardModule { }
