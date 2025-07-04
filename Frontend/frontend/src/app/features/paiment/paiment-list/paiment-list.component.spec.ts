import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaimentListComponent } from './paiment-list.component';

describe('PaimentListComponent', () => {
  let component: PaimentListComponent;
  let fixture: ComponentFixture<PaimentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaimentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
