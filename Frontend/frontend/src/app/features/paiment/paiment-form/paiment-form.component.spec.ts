import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaimentFormComponent } from './paiment-form.component';

describe('PaimentFormComponent', () => {
  let component: PaimentFormComponent;
  let fixture: ComponentFixture<PaimentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaimentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaimentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
