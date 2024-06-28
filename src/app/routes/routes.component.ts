import { Component } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { NavMenuComponent } from "../components/nav-menu/nav-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-routes',
    standalone: true,
    templateUrl: './routes.component.html',
    styleUrl: './routes.component.scss',
    imports: [
        HomeComponent,
        NavMenuComponent,
        RouterOutlet,
    ]
})
export class RoutesComponent {

}
