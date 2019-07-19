import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PrivateRoutingModule } from './private-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';

@NgModule({
  imports: [CommonModule, PrivateRoutingModule],
  declarations: [PrivateComponent, UserComponent, LoginComponent]
})
export class PrivateModule {}
