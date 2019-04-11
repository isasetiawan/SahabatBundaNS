import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Config} from "./pages/config";
import * as Toast from "nativescript-toast";
import * as dialogs from "ui/dialogs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let request = req.clone({
            headers: Config.createHeaders()
        });

        console.log("");
        console.log(`Creating request to ${req.url}`);

        return next.handle(request).catch(err => {
            console.log(`error happened ${JSON.stringify(err)}`);
            Toast.makeText(err.error.message).show();

            if (err.error.content !== undefined){
                let errors = "";
                for (let key in err.error.content){
                    errors += err.error.content[key] + "\n";
                }
                dialogs.alert({
                    title:err.error.message,
                    message:errors,
                    okButtonText:"Ok"
                }).then(()=>{});
            }

            return Observable.throw(err);
        })
    }

  constructor() { }

}
