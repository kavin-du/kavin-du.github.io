import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() route: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
