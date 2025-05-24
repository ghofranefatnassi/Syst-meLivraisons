import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeDetailsComponent } from './ligne-commande-details.component';

describe('LigneCommandeDetailsComponent', () => {
  let component: LigneCommandeDetailsComponent;
  let fixture: ComponentFixture<LigneCommandeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneCommandeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneCommandeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
