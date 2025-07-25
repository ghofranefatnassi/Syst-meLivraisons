import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonFormComponent } from './livraison-form.component';

describe('LivraisonFormComponent', () => {
  let component: LivraisonFormComponent;
  let fixture: ComponentFixture<LivraisonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivraisonFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
