import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaServiciosComponent } from './roma-servicios.component';

describe('RomaServiciosComponent', () => {
  let component: RomaServiciosComponent;
  let fixture: ComponentFixture<RomaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomaServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
