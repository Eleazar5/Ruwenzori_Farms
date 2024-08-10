import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const storageService: StorageService = inject(StorageService);

  const token = storageService.getData("userToken");

  if (!token) {
    router.navigate(['/login']);  // or your login route
    return false;
  }

  return new Promise<boolean>((resolve) => {
    authService.verify_validtoken(token).subscribe(
      (res: any) => {
        if (res.success === 1) {
          resolve(true);
        } else {
          router.navigate(['/login']);  // or your login route
          resolve(false);
        }
      },
      (error: any) => {
        console.error('Error checking token validity:', error);
        router.navigate(['/login']);  // or your login route
        resolve(false);
      }
    );
  });
};
