import { Component, OnInit } from '@angular/core';
import {PainPoint} from "../../shared/models/pain-point.model";
import {PainPointService} from "../../shared/services/pain-point.service";
import {GenericListComponent} from "../../shared/components/generic-list/generic-list.component";

@Component({
  selector: 'app-pain-points',
  templateUrl: './pain-points.component.html',
  standalone: true,
  imports: [
    GenericListComponent
  ]
})
export class PainPointsComponent implements OnInit {
  painPoints: PainPoint[] = [];

  constructor(private painPointService: PainPointService) {}

  ngOnInit(): void {
    this.loadPainPoints();
  }

  private loadPainPoints(): void {
    this.painPoints = this.painPointService.getPainPoints();
  }
}
