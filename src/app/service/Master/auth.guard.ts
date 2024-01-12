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
export const authGuardStudent: CanActivateFn = (route, state) => {

  let _router=inject(Router);
  let StudentIsLoggedIn=localStorage.getItem("StudentIsLogin");
  
  if(StudentIsLoggedIn=="false")
  {
    _router.navigate(['student-login'])
    return false
  }
  else if(StudentIsLoggedIn==null)
  {
    _router.navigate(['student-login'])
    return false
  }
  else{
  return true;
  }
};

