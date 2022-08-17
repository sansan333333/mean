import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';

import {AppComponent} from './app.component';
import {TextComponentComponent} from './posts/text-component/text-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponentComponent} from './header-component/header-component.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PostListComponent} from './posts/post-list/post-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {PostsService} from "./posts/posts.service";

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    HeaderComponentComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
