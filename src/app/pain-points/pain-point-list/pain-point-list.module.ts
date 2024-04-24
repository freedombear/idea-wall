import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainPointListComponent } from './pain-point-list.component';
import { PainPointCardModule } from '../pain-point-card/pain-point-card.module';


@NgModule({
  declarations: [PainPointListComponent],
  imports: [
    CommonModule,
    PainPointCardModule
  ],
  exports: [PainPointListComponent]
})
export class PainPointListModule { }
