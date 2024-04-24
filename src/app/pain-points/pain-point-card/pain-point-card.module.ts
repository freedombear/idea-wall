import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainPointCardComponent } from './pain-point-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PainPointCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [PainPointCardComponent]
})
export class PainPointCardModule { }
