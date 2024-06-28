import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutesComponent } from './routes/routes.component';

export const routes: Routes = [
    {path: '', component: RoutesComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'blog', component: BlogComponent}
    ] }
];
