import { Component, OnInit } from '@angular/core';
import { PainPoint } from '../../shared/models/pain-point.model';
import { PainPointService } from '../../shared/services/pain-point.service';

@Component({
  selector: 'app-pain-point-list',
  templateUrl: './pain-point-list.component.html',
  styleUrls: ['./pain-point-list.component.scss']
})
export class PainPointListComponent implements OnInit {
  painPoints: PainPoint[] = [];

  constructor(private painPointService: PainPointService) {}

  ngOnInit(): void {
    this.painPoints = this.painPointService.getPainPoints();
  }
}
