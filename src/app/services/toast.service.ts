import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService
  ) {}

  showSuccess(message: any) {
    this.toastr.success(message, 'Error!', {
      positionClass: 'toast-top-right'
    });
  }

  showError(message: any) {
    this.toastr.error(message, 'Error!', {
      positionClass: 'toast-top-right'
    });
  }
}
