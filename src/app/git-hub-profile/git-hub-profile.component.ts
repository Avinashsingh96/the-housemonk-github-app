import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css'],
})
export class GitHubProfileComponent implements OnInit {
  public userData = [
    {
      id: 1,
      user: 'User Name',
      discription:
        ' With supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 2,
      user: 'User Name',
      discription:
        ' With supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 3,
      user: 'User Name',
      discription:
        ' With supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 4,
      user: 'User Name',
      discription:
        ' With supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 5,
      user: 'User Name',
      discription:
        ' With supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 6,
      user: 'User Name',
      discription:
        ' With supporting text below as a natural lead-in to additional content.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
