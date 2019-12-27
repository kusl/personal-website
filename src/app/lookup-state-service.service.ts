import { Injectable } from '@angular/core';
import { ListApiModel } from './list-api-model';
import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { CommonService } from './common.service';
import { LookupState } from './lookup-state.model';

const BASE_URL = "";

@Injectable()
export class LookupStateService {
  constructor(private api: CommonService) { }
  getList() {
    return this.api
      .getList<LookupState>(BASE_URL + "assets/state.json")
      .pipe(
        map(value => value),
        catchError(response => {
          const data = new ListApiModel<LookupState>();
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
