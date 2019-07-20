import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ContentComponent } from './layouts/content/content.component';
import {AppRoutingModule} from './app-routing.module';
import {TimetableModule} from './modules/timetable/timetable.module';
import {FormModule} from './modules/forms/form.module';
import {MenuService} from './core/services/menu.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './modules/login/login.module';
import { TeacherNamePipe } from './core/pipes/teacher-name.pipe';
import { SortListPipe } from './core/pipes/sort-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    TeacherNamePipe,
    SortListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormModule,
    LoginModule,
    TimetableModule
  ],
  providers: [MenuService],
  exports: [TeacherNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
