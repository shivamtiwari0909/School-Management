import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let _router=inject(Router);
  let IsLoggedIn=localStorage.getItem("IsLogin");
  if(IsLoggedIn=="false")
  {
    _router.navigate(['login'])
    return false
  }
  else if(IsLoggedIn==null)
  {
    _router.navigate(['login'])
    return false
  }
  else{
  return true;
  }
};
