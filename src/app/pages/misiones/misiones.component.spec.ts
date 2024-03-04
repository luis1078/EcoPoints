import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionesComponent } from './misiones.component';

describe('MisionesComponent', () => {
  let component: MisionesComponent;
  let fixture: ComponentFixture<MisionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisionesComponent]
    });
    fixture = TestBed.createComponent(MisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
