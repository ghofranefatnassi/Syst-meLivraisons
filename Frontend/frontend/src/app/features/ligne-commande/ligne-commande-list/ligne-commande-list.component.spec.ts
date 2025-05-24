import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeListComponent } from './ligne-commande-list.component';

describe('LigneCommandeListComponent', () => {
  let component: LigneCommandeListComponent;
  let fixture: ComponentFixture<LigneCommandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneCommandeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneCommandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
