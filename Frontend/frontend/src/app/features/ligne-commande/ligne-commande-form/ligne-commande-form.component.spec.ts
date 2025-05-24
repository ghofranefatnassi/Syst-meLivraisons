import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeFormComponent } from './ligne-commande-form.component';

describe('LigneCommandeFormComponent', () => {
  let component: LigneCommandeFormComponent;
  let fixture: ComponentFixture<LigneCommandeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneCommandeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneCommandeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
