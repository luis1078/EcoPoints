import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecompensaComponent } from './admin-recompensa.component';

describe('AdminRecompensaComponent', () => {
  let component: AdminRecompensaComponent;
  let fixture: ComponentFixture<AdminRecompensaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRecompensaComponent]
    });
    fixture = TestBed.createComponent(AdminRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
