import { AddUserComponent } from './add-user/add-user.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuardService implements CanDeactivate<AddUserComponent> {
  canDeactivate(component: AddUserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
    return component.canExit() ;
      }
  constructor() { }
}
