import { Component, OnInit } from '@angular/core';
import { LookupState } from '../lookup-state.model';
import { Subproject } from '../subproject.model';
import { ProjectType } from '../project-type.model';
import { Title } from '@angular/platform-browser';
import { LookupStateService } from '../lookup-state-service.service';
import { ProjectTypeService } from '../project-type.service';
import { SubprojectService } from '../subproject.service';
import { HTTP_STATUS_CODE } from '../http-status-code.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  id: number;
  title = 'Personal Website';
  lookupStates: Array<LookupState>;
  subprojects: Array<Subproject>;
  lookupProjectTypes: Array<ProjectType>;
  project: Project;
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.getId();
    this.getLookupStates();
    this.getLookupProjectTypes();
    this.getSubprojects();
    this.getProject();
  }
  public constructor(private titleService: Title,
    private lookupStateService: LookupStateService,
    private projectTypeService: ProjectTypeService,
    private subprojectService: SubprojectService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute) {
  }
  getId() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.titleService.setTitle(`Personal Website - Item ${this.id}`);
    });
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
        console.error(response);
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
        console.error(response);
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
        console.error({ subprojects: this.subprojects });
      }
    });
  }
  getProject() {
    this.projectService.get(this.id).subscribe(response => {
      if (response.status === HTTP_STATUS_CODE.OK && response.data) {
        if (!this.project) {
          this.project = new Project();
        }
        this.project = response.data as Project;
      } else {
        console.error({ project: this.project });
      }
    })
  }
}
