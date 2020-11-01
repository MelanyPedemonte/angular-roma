import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaNosotrasComponent } from './roma-nosotras.component';

describe('RomaNosotrasComponent', () => {
  let component: RomaNosotrasComponent;
  let fixture: ComponentFixture<RomaNosotrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomaNosotrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaNosotrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
