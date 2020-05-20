import {Injectable, ResolvedReflectiveFactory} from '@angular/core';
import {User} from '../_models/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { error } from 'protractor';
import { Message } from '../_models/Message';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';
constructor(private userService: UserService, private router: Router, private alertify: AlertifyService,
            private authService: AuthService) {}

resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
    return this.userService.getMessages(this.authService.decodedToken.nameid,
        this.pageNumber, this.pageSize, this.messageContainer).pipe(
        catchError(error => {
            this.alertify.error('Problem retrieving messages');
            this.router.navigate(['/home']);
            return of(null);
        })
    );
}
}
