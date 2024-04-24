import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainPointListComponent } from './pain-point-list.component';
import {PainPointCardModule} from "../pain-point-card/pain-point-card.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PainPointCardModule,
    PainPointListComponent,

  ],
  exports: [PainPointListComponent]
})
export class PainPointListModule { }
