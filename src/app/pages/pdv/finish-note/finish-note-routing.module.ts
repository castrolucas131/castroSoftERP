import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishNotePage } from './finish-note.page';

const routes: Routes = [
  {
    path: '',
    component: FinishNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishNotePageRoutingModule {}
