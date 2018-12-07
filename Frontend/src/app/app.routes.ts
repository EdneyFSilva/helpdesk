import { SummaryComponent } from './components/summary/summary.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { LoginComponent } from './components/secutiry/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './components/secutiry/auth.guard';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent },
    {path: 'user-new', component: UserNewComponent, canActivate: [AuthGuard] },
    {path: 'user-new/:id', component: UserNewComponent, canActivate: [AuthGuard] },
    {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
    {path: 'ticket-new', component: TicketNewComponent, canActivate: [AuthGuard] },
    {path: 'ticket-new/:id', component: TicketNewComponent, canActivate: [AuthGuard] },
    {path: 'ticket-list', component: TicketListComponent, canActivate: [AuthGuard] },
    {path: 'ticket-detail/:id', component: TicketDetailComponent, canActivate: [AuthGuard] },
    {path: 'summary', component: SummaryComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
