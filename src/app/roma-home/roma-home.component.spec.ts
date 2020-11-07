import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaHomeComponent } from './roma-home.component';

describe('RomaHomeComponent', () => {
  let component: RomaHomeComponent;
  let fixture: ComponentFixture<RomaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
