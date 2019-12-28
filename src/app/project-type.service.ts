import { Injectable } from '@angular/core';
import { ListApiModel } from './list-api-model';
import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { ProjectType } from './project-type.model';
import { CommonService } from './common.service';
const BASE_URL = "";
@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {

  constructor(private api: CommonService) { }
  getList() {
    return this.api
      .getList<ProjectType>(BASE_URL + "assets/projectType.json")
      .pipe(
        map(value => value),
        catchError(response => {
          const data = new ListApiModel<ProjectType>();
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
