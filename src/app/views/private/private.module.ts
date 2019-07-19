import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PrivateRoutingModule } from './private-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, PrivateRoutingModule, ReactiveFormsModule],
  declarations: [PrivateComponent, UserComponent, LoginComponent]
})
export class PrivateModule {}
