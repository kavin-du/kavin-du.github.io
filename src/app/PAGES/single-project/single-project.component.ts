import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projectsList from '../../DATA/projects.json';

// image path type for carousel
type ImagePath = {
  path: string
}

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  project: any;
  // images: ImagePath[] = [
  //   {path: '../../../assets/avatar.png'},
  //   {path: '../../../assets/avatar.png'},
  //   {path: '../../../assets/avatar.png'},
  //   {path: '../../../assets/avatar.png'},
  // ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projectsList.find(p => p.id === id)
  }

  ngOnInit(): void {
  }

}
