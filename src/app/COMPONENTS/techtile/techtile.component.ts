import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techtile',
  templateUrl: './techtile.component.html',
  styleUrls: ['./techtile.component.scss']
})
export class TechtileComponent implements OnInit {
  @Input() title: string = '';
  @Input() logos: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
