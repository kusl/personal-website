import { Injectable } from '@angular/core';
import { CommonService } from './common-service.service';
import { LookupStateModel } from './lookup-state-model';
import { ListApiModel } from './list-api-model';
import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";

const BASE_URL = "";

@Injectable()
export class LookupStateService {
  constructor(private api: CommonService) { }
  getList() {
    return this.api
      .getList<LookupStateModel>(BASE_URL + "assets/state.json")
      .pipe(
        map(value => value),
        catchError(response => {
          const data = new ListApiModel<LookupStateModel>();
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
