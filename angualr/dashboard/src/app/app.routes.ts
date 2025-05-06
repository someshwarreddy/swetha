import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContactComponent } from '../contact/contact.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

export const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'contact', component: ContactComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path: '**', component: PagenotfoundComponent} // Wildcard route for a 404 page

];
