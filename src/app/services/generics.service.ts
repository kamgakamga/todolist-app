import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ConfirmationService, Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constante';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {
  public urlImage = AppConstants.API_BASE_URL + 'core/telechager/piece-jointe/';
  public filedata = undefined;
  msgs: Message[] = [];
  constructor(
    private _http: HttpClient,
    private _location: Location,
    protected sanitizer: DomSanitizer,
    private _router: Router,
    private _confirmationService: ConfirmationService,
  ) { }

  public getPromiseResource(url: string) {
    return this._http.get(`${AppConstants.API_BASE_URL  + url}`).toPromise();
  }

  public getObservableResource(prefix: string, url: string) {
    return this._http.get(`${prefix + url}`);
  }

  public postPromiseResource( url: string, dto: any) {
    return this._http.post(`${AppConstants.API_BASE_URL + url}`, dto).toPromise();
  }

  public putPromiseResource(prefix: string, url: string, dto: any) {
    return this._http.put(`${AppConstants.API_BASE_URL + url}`, dto).toPromise();
  }

  public patchPromiseResource(url: string, dto: any) {
    return this._http.patch(`${AppConstants.API_BASE_URL + url}`, dto).toPromise();
  }

  public deletePromiseResource(url: string) {
    return this._http.delete(`${AppConstants.API_BASE_URL + url}`).toPromise();
  }

  public getSubscribeResource(prefix: string, url: string): Observable<any> {
    return this._http.get(`${prefix + url}`);
  }

  public postSubscribeResource(prefix: string, url: string, dto: any) {
    return this._http.post(`${prefix + url}`, dto).toPromise();
  }

  public putSubscribeResource(prefix: string, url: string, dto: any) {
    return this._http.put(`${prefix + url}`, dto).toPromise();
  }

  public patchSubscribeResource(prefix: string, url: string, dto: any) {
    return this._http.patch(`${prefix + url}`, dto).toPromise();
  }

  public deleteSubscribeResource(url: string) {
    return this._http.delete(`${AppConstants.API_BASE_URL + url}`).toPromise();
  }

  public getTextPromiseResource(prefix: string, url: string) {
    return this._http.get(`${prefix + url}`, { responseType: 'text' }).toPromise();
  }

  public getTextSubscribeResource(prefix: string, url: string) {
    return this._http.get(`${prefix + url}`, { responseType: 'text' });
  }

  public onloadPromisePaginateData(prefix: string, url: string, size: number, page: number, token: string) {
    return this.getPromiseResource( `${url}?size=${size}&page=${page}&keyword=${token}`);
  }

  public onloadSubscribePaginateData(prefix: string, url: string, size: number, page: number, token: string) {
    console.log(prefix, url);
    return this.getSubscribeResource(prefix, `${url}?size=${size}&page=${page}&keyword=${token}`);
  }

  // public onBackClicked() {
  //   this._location.back();
  // }

  // public onForwardClicked() {
  //   this._location.forward();
  // }

  // public reportGetResource(path: string) {
  //   return this._http.get(AppConstants.API_BASE_URL + path, {
  //     observe: 'response',
  //     responseType: 'arraybuffer' as 'json'
  //   }).toPromise().then(this.extractData).catch(this.handleError);
  // }

  // public reportPostResource(path: string, filter: any) {
  //   return this._http.post(AppConstants.API_BASE_URL + path, filter, {
  //     observe: 'response',
  //     responseType: 'arraybuffer' as 'json'
  //   }).toPromise().then(this.extractData).catch(this.handleError);
  // }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(errMsg);
  }

  private extractData(res: HttpResponse<any>) {
    let body;
    if (res) {
      body = res.body;
    }
    return body;
  }


  // public getByteArrayAndSaveReport(value: any, filename: string, extension: string, isExport?: boolean) {
  //   let file
  //   // la ligne suivante telecharge et enregistre directement en pdf dans le repertoire telechargement
  //   if (isExport || extension.toLowerCase() === 'pdf') {
  //     file = new Blob([value], { type: 'application/pdf' });
  //     // @ts-ignore
  //     const isFirefox = typeof InstallTrigger !== 'undefined';
  //     if (isFirefox) {
  //       FileSaver.saveAs(file, filename);
  //     } else {
  //       const blobUrl = URL.createObjectURL(file);
  //       const iframe = document.createElement('iframe');
  //       iframe.style.display = 'none';
  //       // Sans DOMSanitizer cela peut bien marcher mais le navigateur ne reconnait pas ce binaire comme une ressource sûre.
  //       // iframe.src = blobUrl;
  //       // DOMSanitizer permet d'en faire une ressource sûre.
  //       iframe.src = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl));
  //       document.body.appendChild(iframe);
  //       iframe.contentWindow.print();
  //     }
  //   } else if (extension.toLowerCase() === 'png' || extension.toLowerCase() === 'jpg' || extension.toLowerCase() === 'jpeg') {
  //     file = new Blob([value], { type: 'application/octet-stream' });
  //     const objectURL = URL.createObjectURL(file);
  //     this.filedata = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  //     // this.dialogDisplay = this.dialog.open(ImageDetailComponent, {
  //     //   disableClose: true,
  //     //   data: {
  //     //     image: this.filedata,
  //     //     title: filename
  //     //   }
  //     // });

  //     // this.dialogDisplay.afterClosed().subscribe((result: DialogImage) => {
  //     //   this.dialogDisplay = null;
  //     //   if (result) {
  //     //     FileSaver.saveAs(file, filename);
  //     //   }
  //     // });
  //   } else {
  //     file = new Blob([value], { type: 'application/octet-stream' });
  //     FileSaver.saveAs(file, filename);
  //   }
  // }

  // public getByteArrayAndSaveReportPDF(value: any, filename: string, isExport?: number) {
  //   console.log(isExport);
  //   // la ligne suivante telecharge et enregistre directement en pdf dans le repertoire telechargement
  //   if (isExport && isExport === 2) {
  //     const file = new Blob([value], { type: (isExport && isExport === 2) ? 'application/xls' : PDF_TYPE });
  //     FileSaver.saveAs(file, filename + new Date().getTime() + OLD_EXCEL_EXTENSION);
  //   } else if (isExport && isExport === 3) {
  //     const file = new Blob([value], { type: 'application/octet-stream' });
  //     FileSaver.saveAs(file, filename + new Date().getTime() + EXT_RTF);
  //   } else {
  //     const file = new Blob([value], { type: PDF_TYPE });
  //     // @ts-ignore
  //     const isFirefox = typeof InstallTrigger !== 'undefined';
  //     if (isFirefox) {
  //       FileSaver.saveAs(file, filename + new Date().getTime() + PDF_EXTENSION);
  //     } else {
  //       const blobUrl = URL.createObjectURL(file);
  //       const iframe = document.createElement('iframe');
  //       iframe.style.display = 'none';
  //       // Sans DOMSanitizer cela peut bien marcher mais le navigateur ne reconnait pas ce binaire comme une ressource sûre.
  //       // iframe.src = blobUrl;
  //       // DOMSanitizer permet d'en faire une ressource sûre.
  //       iframe.src = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl));
  //       document.body.appendChild(iframe);
  //       iframe.contentWindow.print();
  //     }
  //   }
  // }

  public downloadFile(url: any): Observable<any> {
    return this._http.get(`${AppConstants.API_BASE_URL + url}`, { responseType: 'blob' });
  }

  public transformUnderlineWord(val: string): string {
    return val.split('_').join(' ');
  }

  // public traiterDisplayName(displayName: string) {
  //   if (displayName) {
  //     const idx = displayName.indexOf(' ');
  //     if (idx > 0) {
  //       return displayName.slice(0, idx + 2);
  //     } else {
  //       return displayName;
  //     }
  //   }
  // }

  public getProfileImage(id: number) {
    return this.urlImage + id;
  }

  public getData(url: string, pageSize: any, page: any, orderBy: any, sort: any, token: any) {
    const urlEnd = `${url}?size=${pageSize}&page=${page}&keyword=${token}&sort=${sort}&orderBy=${orderBy}`
    const value = AppConstants.API_BASE_URL + `${urlEnd}`
    console.log(this._http.get(value).toPromise());
    // return this._http.get(value);
    this.getPromiseResource(url).then((resp: any) => {
 //     this._modalCommunicationService.notifyOnClose(resp);
    })
  }

  // public deletePromiseResource(prefix: string, url) {
  //   return this._http.delete(`${prefix + url}`).toPromise();
  // }

  // public onDelete(url: any, pageSize: any, page: any, orderBy: any, sort: any, key: any) {
  //   console.log('entete');
  //   let confirmationExecuted: boolean;
  //   confirmationExecuted = false
  //   this._confirmationService.confirm({
  //     message: AppConstants.ARE_YOU_SURE + `  ${key} ?`,
  //     header: AppConstants.CONFIRMATION,
  //     icon: AppConstants.ICON_DELETE,
  //     accept: () => {
  //       console.log(url);
  //       console.log(key);
  //       if (confirmationExecuted === false) {
  //         this.deletePromiseResource(AppConstants.API_BASE_URL, `${url}/${key}`)
  //           .then((resp: any) => {
  //             console.log(resp);
  //             this.msgs = [{severity: AppConstants.SEVERITY_DELETE, summary: AppConstants.CONFIRM_DELETE, detail: resp.message}];
  //             this._toastService.toastConfirm(resp.message);
  //             this._modalCommunicationService.notifyOnClose(resp);
  //           }).catch((err) => {
  //           console.log(err);
  //           this._toastService.toastError(err.error.message);
  //         });
  //         confirmationExecuted = true;
  //       }
  //     },
  //     reject: () => {
  //       if (confirmationExecuted === false) {
  //         this.msgs = [{severity: AppConstants.SEVERITY_DELETE, summary: AppConstants.REJECTED_DELETE, detail: AppConstants.REJECT_DELETE}];
  //         confirmationExecuted = true;
  //       }
  //     }
  //   });

  // }

  // public onDeleteCustom(url: any, key: any, pageSize?: any, page?: any, orderBy?: any, sort?: any) {
  //   console.log('entete');
  //   this.deletePromiseResource(AppConstants.API_BASE_URL, `${url}/${key}`)
  //     .then((resp: any) => {
  //       console.log(resp);
  //       this.msgs = [{severity: AppConstants.SEVERITY_DELETE, summary: AppConstants.CONFIRM_DELETE, detail: resp.message}];
  //       this._toastService.toastConfirm(resp.message);
  //       this._modalCommunicationService.notifyOnClose(resp);
  //     }).catch((err) => {
  //     console.log(err);
  //     this._toastService.toastError(err.error.message);
  //   });
  // }

  public confirmResponseAPI(title: string, icon: SweetAlertIcon, customTimer: number = 5000, position: SweetAlertPosition = 'top-end') {
    const Toast = Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: customTimer,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  
    Toast.fire({
      icon: icon,
      title: title,
    });
  }
  
}
