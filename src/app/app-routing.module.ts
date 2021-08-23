import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { NewBlogComponent } from "./new-blog/new-blog.component";
import { CommentsComponent } from "./comments/comments.component";
import {CreateAccountComponent} from "./create-account/create-account.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'new-blog', component: NewBlogComponent },
  { path: 'comments', component: CommentsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
