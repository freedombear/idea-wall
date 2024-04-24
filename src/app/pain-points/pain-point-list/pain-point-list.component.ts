import { Component, OnInit } from '@angular/core';
import { PainPoint } from '../../shared/models/pain-point.model';
import { PainPointService } from '../../shared/services/pain-point.service';
import {PainPointCardModule} from "../pain-point-card/pain-point-card.module";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pain-point-list',
  standalone: true,
  imports: [
    PainPointCardModule,
    NgForOf,
  ],
  templateUrl: './pain-point-list.component.html',
  styleUrl: './pain-point-list.component.scss'
})
export class PainPointListComponent {
  painPoints: PainPoint[] = [];

  constructor(private painPointService: PainPointService) {}

  ngOnInit(): void {
    this.painPoints = this.painPointService.getPainPoints();
  }
}
