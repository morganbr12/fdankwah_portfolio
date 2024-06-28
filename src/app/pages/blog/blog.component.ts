import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {


  blogPost = [
    {
      title: 'What does it take to become a web developer',
      content: 'Web development also know as website development, encompasess of variety of task and process involved in creating a websites for the internet.',
      name: 'Fredrick',
      uploadedDate: '1st october 2021',
      Read: '1 minute ago',
      imageUrl: ''
    },
    {
      title: 'What does it take to become a web developer',
      content: 'Web development also know as website development, encompasess of variety of task and process involved in creating a websites for the internet.',
      name: 'Fredrick',
      uploadedDate: '1st october 2021',
      Read: '1 minute ago',
      imageUrl: ''
    },
    {
      title: 'What does it take to become a web developer',
      content: 'Web development also know as website development, encompasess of variety of task and process involved in creating a websites for the internet.',
      name: 'Fredrick',
      uploadedDate: '1st october 2021',
      Read: '1 minute ago',
      imageUrl: ''
    },
  ];
}
