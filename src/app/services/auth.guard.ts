import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Router } from "@angular/router";
import { RestHandlerService } from "./rest-handler.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _rh: RestHandlerService, private myRoute: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let val = this._rh.getDefinition();
    if (val && val != []) {
      return true;
    } else {
      this.myRoute.navigate(["/"]);
      return false;
    }
  }
}
