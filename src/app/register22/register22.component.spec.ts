import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register22Component } from './register22.component';

describe('Register22Component', () => {
  let component: Register22Component;
  let fixture: ComponentFixture<Register22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Register22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Register22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
