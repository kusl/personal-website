import { Component, OnInit } from '@angular/core';
import { LookupState } from '../lookup-state.model';
import { Subproject } from '../subproject.model';
import { ProjectType } from '../project-type.model';
import { Title } from '@angular/platform-browser';
import { LookupStateService } from '../lookup-state-service.service';
import { ProjectTypeService } from '../project-type.service';
import { SubprojectService } from '../subproject.service';
import { HTTP_STATUS_CODE } from '../http-status-code.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.getLookupStates();
    this.getLookupProjectTypes();
    this.getSubprojects();
  }
  title = 'Personal Website';
  lookupStates: Array<LookupState>;
  subprojects: Array<Subproject>;
  lookupProjectTypes: Array<ProjectType>;
  public constructor(private titleService: Title,
    private lookupStateService: LookupStateService,
    private projectTypeService: ProjectTypeService,
    private subprojectService: SubprojectService) {
  }
  getLookupStates() {
    this.lookupStateService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data) {
        if (!this.lookupStates) {
          this.lookupStates = new Array<LookupState>();
        }
        response.data.forEach(x => {
          this.lookupStates.push(x.data);
        });
        console.log({ types: this.lookupProjectTypes });
      } else {
        console.log(response);
      }
    });
  }
  getLookupProjectTypes() {
    this.projectTypeService.getList().subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data) {
        if (!this.lookupProjectTypes) {
          this.lookupProjectTypes = new Array<ProjectType>();
        }
        response.data.forEach(x => {
          this.lookupProjectTypes.push(x.data);
        });
        console.log({ projectTypes: this.lookupProjectTypes });
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
