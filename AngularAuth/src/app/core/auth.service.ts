import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManager, User, WebStorageStateStore, Log } from 'oidc-client';
import { Constants } from '../constants';
import { Utils } from './utils';
import { AuthContext } from '../model/auth-context';
import {Subject} from 'rxjs'

@Injectable()
export class AuthService {
  /**
  - UserManager manages all the low-level details of the open-id protocal for you.
   */
  private _userManager: UserManager
  /**
  * Encapsulates the client side info about a signed in user such as:
  - Id and access tokens returned from the identity provider
  - Any user profile info exposed by the IDP as claims
  - Being able to tell when the tokens for the user are expired.
   */
  private _user: User; 
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    /**
    The settings required in the identity provider conf are:
    - Authority url for your identity provider.
    - Client id configured in the identity provider
    - Redirect_uri where the user will be re-directed by the sts after sign-in
    - The scope of access for the client
    * The response_type expected:
    - For authorization flow with picsi, this will just be 'code'
    - In explicit flow, the responce type has 2 values, 'id_token token'
    - It acts as an indication for change in the client configuration/ authorization code flow versus code flow.
    * post_logout_redirect_uri - Where the sts can redirect you to, after you redirect the sts to logout.
     */
    const stsSettings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}signin-callback`,
      scope: 'openid profile projects-api',
      response_type: 'code',
      // post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`,
      //metadata required for auth0 client to work. with all functionality
      metadata:{
        issuer: `${Constants.stsAuthority}`,
        authorization_endpoint: `${Constants.stsAuthority}authorize`,
        jwks_uri: `${Constants.stsAuthority}.well-known/jwks.json`,
        token_endpoint: `${Constants.stsAuthority}oauth/token`,
        userinfo_endpoint: `${Constants.stsAuthority}userinfo`,
        end_session_endpoint: `${Constants.stsAuthority}/v2/logout?client_id=${Constants.clientId}&returnTo=${encodeURI(Constants.clientRoot)}signout-callback`
      }
    };
    this._userManager = new UserManager(stsSettings);
  }

  login(){
    return this._userManager.signinRedirect();
  }
  //Keeps track of whether the user is logged In;
  isLoggedIn(): Promise<boolean>{
    return this._userManager.getUser().then(user =>{
      const userCurrent = !!user && !user.expired;
      if(this._user !== user){
         this._loginChangedSubject.next(userCurrent);
      }
      this._user = user;
      return userCurrent;
    })
  }

  completeLogin(){
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }

  logout(){
    this._userManager.signoutRedirect();
  }

  completeLogout(){
    return this._userManager.signoutRedirectCallback();
  }
}
