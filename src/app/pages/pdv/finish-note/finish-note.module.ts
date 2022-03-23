import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishNotePageRoutingModule } from './finish-note-routing.module';

import { FinishNotePage } from './finish-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishNotePageRoutingModule
  ],
  declarations: [FinishNotePage]
})
export class FinishNotePageModule {}
