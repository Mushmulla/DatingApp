import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { PaginationModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {ButtonsModule} from 'ngx-bootstrap/buttons';




import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import {UserService} from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';

import { TimeAgoExtendsPipe } from './_services/TimeAgoExtendsPipe.pipe';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages-resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';


export function tokenGetter() {
   return localStorage.getItem('token');
}
// tslint:disable-next-line: use-pipe-transform-interface
// @Pipe({
//    name: 'timeAgo',
//    pure: false
// })
// export class TimeAgoExtendsPipe extends TimeAgoPipe {}

// export class CustomHammerConfig extends HammerGestureConfig {
//   overrides = {
//      pinch: {enable: false},
//      rotate: {enable: false}
//   };
// }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      TimeAgoExtendsPipe,
      MemberMessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      PaginationModule.forRoot(),
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      ButtonsModule.forRoot(),
      TabsModule.forRoot(), // sumnjivo
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FileUploadModule,

      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

// export class TimeAgoExtendsPipe extends TimeAgoPipe {}


