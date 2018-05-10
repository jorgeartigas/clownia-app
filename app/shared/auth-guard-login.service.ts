import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import firebase = require("nativescript-plugin-firebase")
import { first } from 'rxjs/operators'


@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return firebase.getCurrentUser().then(user => {
        if(user){
            this.router.navigate(['/home']);
            return false;
        }
        this.router.navigate(['/line-up']);
        return true;
    })

    }
}