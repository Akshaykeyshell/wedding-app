import {NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { InvitationComponent} from './invitation.component'





const routes:Routes = [
    {path :'',component:InvitationComponent}
];

@NgModule({imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InvitationRoutingModule { }
