import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectType } from './project-type.model';
import { LookupState } from './lookup-state.model';
import { Subproject } from './subproject.model';

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
  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
