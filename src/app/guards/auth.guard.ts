import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const token = authService.getToken();

  authService.verify_validtoken(token).subscribe(
    (res: any) => {
      console.log(res);
      if (res.success === 1) {
        router.navigate([state.url]);
      } else {
        router.navigate(['/']);
      }
    },
    (error: any) => {
      console.error('Error checking token validity:', error);
      router.navigate(['/']);
    }
  );

  return true;
};
