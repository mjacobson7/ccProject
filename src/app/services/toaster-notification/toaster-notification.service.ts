import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ToasterNotificationService {

  constructor(private toastr: ToastrService) { }

  showError(message, title) {
    this.toastr.error(message, title, {
      closeButton: true,
      disableTimeOut: true,
      tapToDismiss: false
    });
  }

  showWarning(message, title) {
    this.toastr.warning(message, title, {
      progressBar: true,
      timeOut: 10000
    })
  }

}
