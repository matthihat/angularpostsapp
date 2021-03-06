import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service'

@Component({
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})

export class SignUpComponent {

  constructor(public authService: AuthService) {}

  isLoading = false

  onSignup(form: NgForm) {
    if (form.invalid) {
      return
    } else {
      this.authService.createUser(form.value.email, form.value.password)
    }
  }
}
