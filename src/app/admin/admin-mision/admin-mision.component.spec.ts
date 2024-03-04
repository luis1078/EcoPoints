import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMisionComponent } from './admin-mision.component';

describe('AdminMisionComponent', () => {
  let component: AdminMisionComponent;
  let fixture: ComponentFixture<AdminMisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMisionComponent]
    });
    fixture = TestBed.createComponent(AdminMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
