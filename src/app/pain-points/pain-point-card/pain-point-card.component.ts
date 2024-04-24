import { Component, Input } from '@angular/core';
import { PainPoint } from '../../shared/models/pain-point.model';

@Component({
  selector: 'app-pain-point-card',
  templateUrl: './pain-point-card.component.html',
  styleUrls: ['./pain-point-card.component.scss']
})
export class PainPointCardComponent {
  @Input() painPoint!: PainPoint;
}
