import {Component, Input} from '@angular/core';
import {GenericCardComponent} from "../generic-card/generic-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-generic-list',
  standalone: true,
  imports: [
    GenericCardComponent,
    NgForOf
  ],
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.scss'
})
export class GenericListComponent {
  @Input() items: any[] = [];

}
