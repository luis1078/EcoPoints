import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensasComponent } from './recompensas.component';

describe('RecompensasComponent', () => {
  let component: RecompensasComponent;
  let fixture: ComponentFixture<RecompensasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecompensasComponent]
    });
    fixture = TestBed.createComponent(RecompensasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
