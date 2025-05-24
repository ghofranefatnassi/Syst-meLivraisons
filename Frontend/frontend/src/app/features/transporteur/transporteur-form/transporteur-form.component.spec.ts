import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteurFormComponent } from './transporteur-form.component';

describe('TransporteurFormComponent', () => {
  let component: TransporteurFormComponent;
  let fixture: ComponentFixture<TransporteurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransporteurFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
