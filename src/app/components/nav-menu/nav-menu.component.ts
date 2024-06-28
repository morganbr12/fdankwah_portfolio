import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  constructor(private _router: Router) {}


  onMenuItemClick(event: string) {
    switch (event) {
      case 'home':
        this._router.navigate(['/home']); 
        break;
      case 'blog':
        this._router.navigate(['/blog']);
        break;
      case 'linkedIn':
        window.open('http://www.linkedin.com/in/fredrickdankwah');
        break;
      case 'github':
        window.open('http://github.com/morganbr12');
        break;
      default:
        break;
    }
  }

}
