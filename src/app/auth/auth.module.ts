import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { PasswordRecoveryComponent } from "./password-recovery/password-recovery.component";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    PasswordRecoveryComponent,
    AuthComponent
  ],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AuthComponent, SigninComponent, SignupComponent]
})
export class AuthModule {}
