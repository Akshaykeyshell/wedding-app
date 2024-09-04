import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationComponent} from './invitation.component'
import { InvitationRoutingModule } from './invitation.routes';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'







@NgModule({
  declarations: [InvitationComponent],
  imports: [
    CommonModule,
    InvitationRoutingModule,
    FormsModule,
    MatIconModule

  ],
  providers: []
})
export class InvitationModule { }
