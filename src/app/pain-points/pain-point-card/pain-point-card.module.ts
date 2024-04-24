import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PainPointCardComponent } from './pain-point-card.component';
import {
  MatCard, MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [PainPointCardComponent],
  imports: [
    CommonModule,
    MatCardSubtitle,
    MatCardTitle,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIconModule,
  ],
  exports: [PainPointCardComponent]
})
export class PainPointCardModule { }
