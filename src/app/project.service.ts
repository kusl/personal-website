import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { map, catchError } from "rxjs/operators";
import { ApiObjectModel } from './api-object-model';
import { Project } from './project.model';
import { of } from 'rxjs';

const BASE_URL = "";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private api: CommonService) { }

  get(id: number) {
    return this.api.get(BASE_URL + `assets/${id}.json`)
    .pipe(
      map(value => value),
      catchError(response => {
        const data = new ApiObjectModel<Project>();
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
