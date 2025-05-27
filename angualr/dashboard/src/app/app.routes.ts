import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContactComponent } from '../contact/contact.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SettingsComponent } from './settings/settings.component';
import { HomechildComponent } from './homechild/homechild.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent,
         children: [
           { path: 'homechild', component: HomechildComponent}
        ] },   
    { path: 'aboutus', component: AboutusComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'profiles', component: ProfilesComponent },
            {path: 'settings', component: SettingsComponent },
        ]
    },
    {path: 'lifecycle', component: LifecycleComponent },
    { path: 'contact/:id', component: ContactComponent },
    { path: '', redirectTo: 'lifecycle', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent } // Wildcard route for a 404 page

];
