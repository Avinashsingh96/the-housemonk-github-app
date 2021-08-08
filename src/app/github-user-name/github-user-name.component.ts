import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-user-name',
  templateUrl: './github-user-name.component.html',
  styleUrls: ['./github-user-name.component.css']
})
export class GithubUserNameComponent implements OnInit {
  public gituserNameData=[
    {
    id:1,
    username:"username/reponame",
    discription:"discription about repositary"
  },
  {
    id:2,
    username:"username/reponame",
    discription:"discription about repositary"
  },
  {
    id:3,
    username:"username/reponame",
    discription:"discription about repositary"
  }



]



  constructor() { }

  ngOnInit(): void {
  }

}
