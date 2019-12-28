import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiModel } from './list-api-model';
import { map, catchError } from "rxjs/operators";
import { ApiObjectModel } from './api-object-model';
@Injectable()
export class CommonService {
  constructor(private http: HttpClient) { }
  getList<T>(
    url: string,
    httpParams: HttpParams = null,
    httpHeaders: HttpHeaders = null
  ): Observable<ListApiModel<T>> {
    return this.http
      .get<ListApiModel<T>>(url, {
        headers: httpHeaders,
        observe: "response",
        params: httpParams
      })
      .pipe(
        map((response: HttpResponse<ListApiModel<T>>) => {
          let value: ListApiModel<T>;
          if (response.body) {
            value = response.body;
          } else {
            value = new ListApiModel<T>();
          }
          value.status = response.status;
          return value;
        })
      );
  }
  get<T>(
    url: string,
    httpParams: HttpParams = null,
    httpHeaders: HttpHeaders = null): Observable<ApiObjectModel<T>> {
      return this.http.get<ApiObjectModel<T>>(url, {
        headers: httpHeaders,
        observe: "response",
        params: httpParams
      })
      .pipe(
        map((response: HttpResponse<ApiObjectModel<T>>) => {
          let value: ApiObjectModel<T>;
          if (response.body) {
            value = response.body;
          } else {
            value = new ApiObjectModel<T>();
          }
          value.status = response.status;
          return value;
        })
      );
    }
}