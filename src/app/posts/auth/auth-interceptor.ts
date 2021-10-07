import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  //Intercepts http requests, copies the requests and adds auth token to header
  //passes the new clone as the response to the server
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken()
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    })

    return next.handle(authRequest)
  }

}
