import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const userRole = decodedToken.role;

  const allowedRoles = route.data?.['roles'] as string[];

  if (allowedRoles?.includes(userRole)) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
