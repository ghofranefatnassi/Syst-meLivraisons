import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteurListComponent } from './transporteur-list.component';

describe('TransporteurListComponent', () => {
  let component: TransporteurListComponent;
  let fixture: ComponentFixture<TransporteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransporteurListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
