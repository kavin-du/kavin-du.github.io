import { Component, OnInit } from '@angular/core';
import projectsData from '../../DATA/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectsData: any[] = projectsData;

  ngOnInit(): void {
  }

}
