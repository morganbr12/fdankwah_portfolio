import { Component } from '@angular/core';
import { HomeComComponent } from '../../components/home-com/home-com.component';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { Langauges } from '../../interfaces/langauges';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { HomeBlogComponent } from '../home-blog/home-blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavMenuComponent,
    HomeComComponent,
    AboutComponent,
    HomeBlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  currentPage = 0;

  programmingLanguage: Langauges[] = [
    {
      title: 'Flutter', 
      imageUrl: 'assets/icons/flutter-icon.webp',
    },
    {
      title: 'Dart', 
      imageUrl: 'assets/icons/dart-icon.png',
    },
    {
      title: 'Angular', 
      imageUrl: 'assets/icons/angular-icon.png',
    },
    {
      title: 'Java', 
      imageUrl: 'assets/icons/java-icon.webp',
    },
    {
      title: 'Kotlin-icon', 
      imageUrl: 'assets/icons/Kotlin-icon.png',
    },
    {
      title: 'HTML', 
      imageUrl: 'assets/icons/html-icon.webp',
    },
    {
      title: 'CSS', 
      imageUrl: 'assets/icons/css-icon.png',
    },
    {
      title: 'JS', 
      imageUrl: 'assets/icons/js-icon.png',
    },
  ];


  prdouctWorkedOn = [
    {
      title: 'eShuttle Scanner App',
      description: 'This application is mobile applications that is use to scan for tickets. ',
      imageUrl: 'assets/images/eshuttle1.png',
    },
    {
      title: 'eShuttle Scanner App',
      description: 'This application is mobile applications that is use to scan for tickets. ',
      imageUrl: 'assets/images/eshuttle2.png',
    }
  ]

  totalProducts = this.prdouctWorkedOn.length;

  get currentproduct() {
    return this.prdouctWorkedOn[this.currentPage];
  }

  prevProduct() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextProduct() {
    if (this.currentPage < this.totalProducts -1) {
      this.currentPage++;
    }
  }

}
