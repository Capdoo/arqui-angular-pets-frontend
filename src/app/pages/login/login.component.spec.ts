import {TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  });

  it('El componente debe existir ', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
