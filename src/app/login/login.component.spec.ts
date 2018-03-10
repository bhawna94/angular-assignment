import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';



const mocked = { navigate: jasmine.createSpy('navigate')};
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      providers: [{provide: Router, useValue: mocked}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('login form validation', () => {
    inject([LoginComponent], (login: LoginComponent) => {
      spyOn(login, 'formsubmission').and.returnValue(Observable.of({'success'}));
      expect(login.email).toEqual(login.email = '');
      expect(login.password).toEqual(login.password = '');
      expect(login.formsubmission).toEqual(this.router.navigate(['/login/home']));
    });
  });
});
