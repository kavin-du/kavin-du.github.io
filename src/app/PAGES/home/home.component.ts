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
      logos: [
        'assets/techs/frameworks/flutter.png',
        'assets/techs/frameworks/angular.png',
        'assets/techs/frameworks/rn.png',
        'assets/techs/frameworks/spring.png',
        'assets/techs/frameworks/node.png',
      ]
    },
    {
      title: 'Languages',
      logos: [
        'assets/techs/langs/c.png',
        'assets/techs/langs/cpp.png',
        'assets/techs/langs/dart.png',
        'assets/techs/langs/java.png',
        'assets/techs/langs/js.png',
        'assets/techs/langs/py.png',
        'assets/techs/langs/ts.png',
        'assets/techs/langs/scala.png',
      ]
    },
    {
      title: 'Tools',
      logos: [
        'assets/techs/tools/docker.png',
        'assets/techs/tools/figma.png',
        'assets/techs/tools/github.png',
        'assets/techs/tools/intellij.png',
        'assets/techs/tools/jira.png',
        'assets/techs/tools/vscode.png',
        'assets/techs/tools/xd.png',
      ]
    },
    {
      title: 'Databases',
      logos: [
        'assets/techs/db/mongo.png',
        'assets/techs/db/mysql.png',
        'assets/techs/db/postgre.png',
      ]
    },
    {
      title: 'Operating Systems',
      logos: [
        'assets/techs/os/ubuntu.png',
        'assets/techs/os/windows.png',
        'assets/techs/os/fedora.png',
      ]
    },
    {
      title: 'Cloud',
      logos: [
        'assets/techs/cloud/aws.png',
        'assets/techs/cloud/google.png',
        'assets/techs/cloud/heroku.png',
      ]
    },
  ];

  ngOnInit(): void {
  }

}
