import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from "../core/auth.service";

@Component({
    selector: 'app-sigin-callback',
    template: '<div>Logging in...</div>'
})

export class SignInRedirectCallback implements OnInit {
    constructor(
        private _authService: AuthService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._authService.completeLogin().then(user => {
            this._router.navigate(['/'], {replaceUrl: true});
        })
     }
}