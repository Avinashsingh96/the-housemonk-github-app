import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { GithubUserNameComponent } from './github-user-name/github-user-name.component';
import { CommonCardComponentComponent } from './common-card-component/common-card-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubProfileComponent,
    GithubUserNameComponent,
    CommonCardComponentComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
