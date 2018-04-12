import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';
import { PostService } from './services/post.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { Courses2Component } from './courses2/courses2.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { NewCourseForm2Component } from './new-course-form-2/new-course-form-2.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    Courses2Component,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    SignupFormComponent,
    NewCourseForm2Component,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler } // instead of ErrorHandler use AppErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
