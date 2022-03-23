import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdvPage } from './pdv.page';

const routes: Routes = [
  {
    path: '',
    component: PdvPage
  },
  {
    path: 'finish-note',
    loadChildren: () => import('./finish-note/finish-note.module').then( m => m.FinishNotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdvPageRoutingModule {}
