import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainPointCardComponent } from './pain-point-card.component';

describe('PainPointCardComponent', () => {
  let component: PainPointCardComponent;
  let fixture: ComponentFixture<PainPointCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainPointCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainPointCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
