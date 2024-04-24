import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPainPointsComponent } from './top-pain-points.component';

describe('TopPainPointsComponent', () => {
  let component: TopPainPointsComponent;
  let fixture: ComponentFixture<TopPainPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPainPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPainPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
