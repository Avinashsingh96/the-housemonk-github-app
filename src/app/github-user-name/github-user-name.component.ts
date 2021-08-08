import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user-name',
  templateUrl: './github-user-name.component.html',
  styleUrls: ['./github-user-name.component.css']
})
export class GithubUserNameComponent implements OnInit {
  public gituserNameData=[
    {
    id:1,
    username:"Avinash/reponame",
    discription:"discription about repositary"
  },
  {
    id:2,
    username:"Akash/reponame",
    discription:"discription about repositary"
  },
  {
    id:3,
    username:"Ajay/reponame",
    discription:"discription about repositary"
  }



]



  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
