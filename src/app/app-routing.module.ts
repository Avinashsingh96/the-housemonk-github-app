import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{GitHubProfileComponent} from "./git-hub-profile/git-hub-profile.component";
import {GithubUserNameComponent} from "./github-user-name/github-user-name.component"
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component"

const routes: Routes = [
  { path: '', component: GitHubProfileComponent },
  { path: 'github-profile-component', component: GitHubProfileComponent },
  { path: 'github-user-component', component: GithubUserNameComponent },
  { path: '**', component:PageNotFoundComponentComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
