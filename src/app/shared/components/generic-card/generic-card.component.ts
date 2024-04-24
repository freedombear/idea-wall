import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [
    MatCardSubtitle,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon,
    MatButton,
    MatCardModule
  ],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {
  @Input() item: any;

}
