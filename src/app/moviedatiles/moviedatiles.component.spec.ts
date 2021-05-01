import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedatilesComponent } from './moviedatiles.component';

describe('MoviedatilesComponent', () => {
  let component: MoviedatilesComponent;
  let fixture: ComponentFixture<MoviedatilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedatilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedatilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
