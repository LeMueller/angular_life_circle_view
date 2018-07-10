import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  greeting(name:string):void {
    console.log(`Hello ${name}`);
    
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("子组件的视图初始化完毕");
  }

  ngAfterViewChecked() {
    console.log("子组件的视图变更检测化完毕");
  }

}
