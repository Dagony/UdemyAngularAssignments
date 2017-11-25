import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  defaultSubscription = 'advanced';
  user = {
    email: '',
    password: '',
    subscription: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.myForm.value.subscriptionData.email;
    this.user.subscription = this.myForm.value.subscriptionData.subscription;
    this.user.password = this.myForm.value.subscriptionData.password;

    this.myForm.reset();
  }

}
