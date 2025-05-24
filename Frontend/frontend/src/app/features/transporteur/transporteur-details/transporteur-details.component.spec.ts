import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteurDetailsComponent } from './transporteur-details.component';

describe('TransporteurDetailsComponent', () => {
  let component: TransporteurDetailsComponent;
  let fixture: ComponentFixture<TransporteurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransporteurDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
