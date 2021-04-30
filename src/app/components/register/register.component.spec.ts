import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [RegisterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-Check] - should check users email address is invalid', () => {
    let email = component.registerForm.controls['email'];
    expect(component.registerForm instanceof FormGroup).toBeTruthy();
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');
    expect(email.errors['email']).toBeTruthy();
  });

  it('[Email-Check] - should check users correct email address is entered', () => {
    let email = component.registerForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  });

  it('[password-Check] - should check users password errors', () => {
    let pwd = component.registerForm.controls['password'];
    expect(pwd.errors['required']).toBeTruthy();
    pwd.setValue('1234567');
    expect(pwd.errors['minlength']).toBeTruthy();
  });

  it('[password-Check] - should check users password validity', () => {
    let pwd = component.registerForm.controls['password'];
    pwd.setValue('Rekha@1234');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });

  it('[fullname-Check] - should check users fullname validity', () => {
    let pwd = component.registerForm.controls['fullname'];
    pwd.setValue('Rekha');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });

  it('[mobileNumber-Check] - should check users mobileNumber validity', () => {
    let pwd = component.registerForm.controls['mobilenumber'];
    pwd.setValue('7839124143');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });

  it('[Form-Check] - should check form is valid or not if no values entered', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('[Form-Check] - should check form is valid or not if values entered', () => {
    component.registerForm.controls['fullname'].setValue('Rekha');
    component.registerForm.controls['email'].setValue('abc@gmail.com');
    component.registerForm.controls['password'].setValue('Rekha@1234');
    component.registerForm.controls['mobilenumber'].setValue('7839124143');
    expect(component.registerForm.valid).toBeTruthy();
  });
});
