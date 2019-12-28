import { Injectable } from '@angular/core';
import { ListApiModel } from './list-api-model';
import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { CommonService } from './common.service';
import { Subproject } from './subproject.model';
const BASE_URL = "";
@Injectable({
  providedIn: 'root'
})
export class SubprojectService {

  constructor(private api: CommonService) { }
  getList() {
    return this.api
      .getList<Subproject>(BASE_URL + "assets/allforone.json")
      .pipe(
        map(value => value),
        catchError(response => {
          const data = new ListApiModel<Subproject>();
          data.data = null;
          if (response && response.error && response.error.errors) {
            data.errors = response.error.errors;
          }
          data.status = response.status;
          return of(data);
        })
      );
  }
}
