import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit {

  @Input()
  content: string;

  constructor() { }

  ngOnInit() {
  }

}
