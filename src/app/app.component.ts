import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LookupStateService } from './lookup-state-service.service';
import { HTTP_STATUS_CODE } from './http-status-code.enum';
import { ProjectType } from './project-type.model';
import { ProjectTypeService } from './project-type.service';
import { LookupState } from './lookup-state.model';
import { Subproject } from './subproject.model';
import { SubprojectService } from './subproject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Personal Website';
  lookupStates: Array<LookupState>;
  subprojects: Array<Subproject>;
  lookupProjectTypes: Array<ProjectType>;
  public constructor(private titleService: Title,
    private lookupStateService: LookupStateService,
    private projectTypeService: ProjectTypeService,
    private subprojectService: SubprojectService) {
    this.titleService.setTitle(this.title);
    this.getLookupStates();
    this.getLookupProjectTypes();
    this.getSubprojects();
  }
  getLookupStates() {
    this.projectTypeService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data) {
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
    this.subprojectService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data) {
        if (!this.subprojects) {
          this.subprojects = new Array<Subproject>();
        }
        response.data.forEach(x => {
          this.subprojects.push(x.data);
        });
        console.log({ subprojects: this.subprojects });
      } else {
        console.log(response);
      }
    });
  }
  getSubprojects() {
    this.subprojectService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data) {
        if (!this.subprojects) {
          this.subprojects = new Array<Subproject>();
        }
        response.data.forEach(x => {
          this.subprojects.push(x.data);
        });
      } else {
        console.log(response);
      }
    })
  }
}
