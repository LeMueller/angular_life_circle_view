import { Component, OnInit, Input, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @Input()
  content: string;

  message: string = 'hello';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log("子组件投影内容初始化完毕");
    this.message =  'Hello world';
  }

  ngAfterContentChecked() {
    console.log("子组件投影内容变更检测完毕");
  }

}
