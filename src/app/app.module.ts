import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from "@angular/router";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BlogsComponent,
    NewBlogComponent,
    CommentsComponent,
    CreateAccountComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        CKEditorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
