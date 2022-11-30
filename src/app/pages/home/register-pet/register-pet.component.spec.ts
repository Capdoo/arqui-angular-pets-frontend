import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register.PetComponent } from './register-pet.component';

describe('Register.PetComponent', () => {
  let component: Register.PetComponent;
  let fixture: ComponentFixture<Register.PetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Register.PetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Register.PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
