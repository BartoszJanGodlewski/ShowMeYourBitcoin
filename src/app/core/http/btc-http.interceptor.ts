import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BtcHttpInterceptor implements HttpInterceptor {

  constructor( ) { }

  private addHeaderToRequest(request: HttpRequest<any>, headerName: string, headerValue: string) {
    return request.clone({
      headers: request.headers.set(headerName, headerValue)
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addHeaderToRequest(request, 'Angular', 'test');

    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      return event;
    }));
  }
}
