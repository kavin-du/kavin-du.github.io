import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  techs: any = [
    {
      title: 'Frameworks',
      margin: 25,
      logos: [
        {url: 'assets/techs/frameworks/flutter.png', size: 85},
        {url: 'assets/techs/frameworks/react.png', size: 75},
        {url: 'assets/techs/frameworks/angular.png', size: 70},
        {url: 'assets/techs/frameworks/rn.png', size: 80},
        {url: 'assets/techs/frameworks/spring.png', size: 75},
        {url: 'assets/techs/frameworks/node.png', size: 80},
        {url: 'assets/techs/frameworks/svelte.png', size: 60},
      ]
    },
    {
      title: 'Languages',
      margin: 20,
      logos: [
        {url: 'assets/techs/langs/c.png', size: 65},
        {url: 'assets/techs/langs/cpp.png', size: 80},
        {url: 'assets/techs/langs/dart.png', size: 75},
        {url: 'assets/techs/langs/java.png', size: 90},
        {url: 'assets/techs/langs/js.png', size: 80},
        {url: 'assets/techs/langs/py.png', size: 80},
        {url: 'assets/techs/langs/ts.png', size: 80},
        {url: 'assets/techs/langs/scala.png', size: 80},
      ]
    },
    {
      title: 'AI/ ML',
      margin: 25,
      logos: [
        {url: 'assets/techs/ml/pytorch.png', size: 120},
        {url: 'assets/techs/ml/keras.jpg', size: 80},
        {url: 'assets/techs/ml/opencv.png', size: 75},
        {url: 'assets/techs/ml/sklearn.png', size: 80}
      ]
    },
    {
      title: 'Tools',
      margin: 20,
      logos: [
        {url: 'assets/techs/tools/docker.png', size: 80},
        {url: 'assets/techs/tools/figma.png', size: 80},
        {url: 'assets/techs/tools/github.png', size: 80},
        {url: 'assets/techs/tools/jira.png', size: 80},
        {url: 'assets/techs/tools/xd.png', size: 80},
      ]
    },
    {
      title: 'Databases',
      margin: 25,
      logos: [
        {url: 'assets/techs/db/mongo.png', size: 80},
        {url: 'assets/techs/db/mysql.png', size: 80},
        {url: 'assets/techs/db/postgre.png', size: 80},
      ]
    },
    {
      title: 'Cloud',
      margin: 25,
      logos: [
        {url: 'assets/techs/cloud/aws.png', size: 80},
        {url: 'assets/techs/cloud/google.png', size: 80},
        {url: 'assets/techs/cloud/heroku.png', size: 80},
      ]
    },
  ];

  ngOnInit(): void {
  }

}
