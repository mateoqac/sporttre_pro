import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService implements CanActivate {

  anonymousUser = {
      UserID: null,
      UserName: 'Anonymous',
      DisplayName: 'Anonymous User',
      IsAuthenticated: false,
      AuthToken: null,
      AuthTokenExpires: null,
      RefreshToken: null,
      IsDeveloper: false,
      IsCertifiedOrOnTrack: false,
      ProAppTermsAccepted: false,
  };

  public User = this.anonymousUser;
  public screenTemplates:Boolean = false;
  public filter:Boolean = false;
  public clients:Boolean = false;
  public screenResults:Boolean =  false;
  public current:Object = {};

  constructor(private storage: Storage, private router: Router) { }

  public async setAuthenticationData(data) {
    if (data === null || data['access_token'] === null) {
      this.clearSessionData();
      return;
    }

    console.log('SetAuthenticationData fired');

    const prevUserId = this.User.UserID;
    const prevRefreshToken = this.User.RefreshToken;

    this.User.UserID = data['tpis:userId'];
    this.User.UserName = data['tpis:username'];
    this.User.DisplayName = data['tpis:userDisplayName'];
    this.User.IsDeveloper = data['tpis:inRoleDeveloper'];
    this.User.IsCertifiedOrOnTrack = data['tpis:isCertifiedOrOnTrack'];
    this.User.IsAuthenticated = true;
    this.User.AuthToken = data['access_token'];
    this.User.AuthTokenExpires = data['.expires'];
    this.User.RefreshToken = data['refresh_token'];
    this.User.ProAppTermsAccepted = true; // TODO: sstetler - Terms Accepted

    // HACK: sstetler - RefreshToken does not come down on auto refresh, so if it's not set here check to see if same user and update
    if (!this.User.RefreshToken) {
        if (prevUserId === this.User.UserID) {
            this.User.RefreshToken = prevRefreshToken;
        }
    }
    await this.storage.set('User', this.User);

    console.log('SetAuthenticationData complete');
  }

  public async clearSessionData() {
    this.User = this.anonymousUser;

    this.storage.clear();

    this.screenTemplates = false;
    this.filter = false;
    this.clients = false;
    this.screenResults = false;
    this.current = {};

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let _user;
    if (this.User.IsAuthenticated) {
      console.log('User object already set for this session');
      return true;
    } else {
      // detect if there's a session in localstorage from previous use.
      // if it is, pull into our service
      this.storage.get('User').then((value) => _user = value);

      if (_user && _user.IsAuthenticated) {
        // if there's a user, lets grab their favorites from the server
        console.log('got User from localstorage');
        this.User = _user;

        return true;
      } else {
        console.log('User session not set and not in local storage');
        // no user info in localstorage,
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
        }
      }
  }

  // check if there's a user session present
  // ALL WAY FROM IONIC 1
          // public HasSession() {
          //   let _user;
          //   if (this.User.IsAuthenticated) {
          //     console.log('User object already set for this session');
          //     // if this session is already initialized in the service
          //     return true;
          //   } else {
          //     // detect if there's a session in localstorage from previous use.
          //     // if it is, pull into our service
          //     this.storage.get('User').then((value) => _user = value);

          //     if (_user && _user.IsAuthenticated) {
          //       // if there's a user, lets grab their favorites from the server
          //       console.log('got User from localstorage');
          //       this.User = _user;

          //       return true;
          //     } else {
          //       console.log('User session not set and not in local storage');
          //       // no user info in localstorage, reject
          //       return false;
          //       }
          //     }
          // }

  /*Convenience method for checking if User is logged in, but the AuthToken is expired */
  public async hasExpiredAuthToken() {
      if (!this.User.IsAuthenticated) {
          return false;
      }

      const tokenDate = new Date(this.User.AuthTokenExpires);
      const nowDate = new Date();

      const result = await (tokenDate <= nowDate);

      if (result) {
        console.log('SessionManager.HasExpiredAuthToken: true...');
        console.log('SessionManager.HasExpiredAuthToken: AuthTokenExpires = ' + tokenDate);
        console.log('SessionManager.HasExpiredAuthToken: nowDate = ' + nowDate);
      }

      return result;
  }

  /* If the current user is logged in, will set the ProAppTermsAccepted to true.  This should be called after making call to server
      to accept the terms.*/
  public async setTermsAccepted() {
    let _user = this.User;
    if (!_user || !_user.IsAuthenticated) {
      // either this.User isn't set or it's set to anonymous
      // attempt to grab out of local storage
      this.storage.get('User').then((value) => _user = value);
    }

    if (_user && _user.IsAuthenticated) {
      // we have the logged in user object, set property and set back to local storage
      _user.ProAppTermsAccepted = true;

      this.User = _user;
      await this.storage.set('User', this.User);

      console.log('SessionManager: set user.ProAppTermsAccepted = true and persisted to storage');
    }
  }
}
