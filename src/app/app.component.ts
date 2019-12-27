import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LookupStateService } from './lookup-state-service.service';
import { HTTP_STATUS_CODE } from './http-status-code.enum';
import { LookupStateModel } from './lookup-state-model';
import { ProjectType } from './project-type.model';
import { ProjectTypeServiceService } from './project-type-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Personal Website';
  lookupStates: Array<LookupStateModel>;
  lookupProjectTypes: Array<ProjectType>;
  public constructor(private titleService: Title,
    private lookupStateService: LookupStateService,
    private projectTypeService: ProjectTypeServiceService) {
    this.titleService.setTitle(this.title);
    this.getLookupStates();
    this.getLookupProjectTypes();
  }
  getLookupStates() {
    this.projectTypeService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data != null) {
        if (!this.lookupProjectTypes) {
          this.lookupProjectTypes = new Array<ProjectType>();
        }
        response.data.forEach(x => {
          this.lookupProjectTypes.push(x.data);
        });
        console.log({ types: this.lookupProjectTypes });
      } else {
        console.log(response);
      }
    });
  }
  getLookupProjectTypes() {
    this.lookupStateService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data != null) {
        if (!this.lookupStates) {
          this.lookupStates = new Array<LookupStateModel>();
        }
        response.data.forEach(x => {
          this.lookupStates.push(x.data);
        });
        console.log({ states: this.lookupStates });
      } else {
        console.log(response);
      }
    });
  }
}
