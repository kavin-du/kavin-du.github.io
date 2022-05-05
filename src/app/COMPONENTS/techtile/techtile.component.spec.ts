import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechtileComponent } from './techtile.component';

describe('TechtileComponent', () => {
  let component: TechtileComponent;
  let fixture: ComponentFixture<TechtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechtileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
