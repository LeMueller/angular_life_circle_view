import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild("child1")
  child1:ChildComponent;

  message: string;

  constructor() {

  }

  ngOnInit() {
    setInterval(()=>{
      this.child1.greeting("Tom");
    } , 5000);
  }

  ngAfterViewInit() {
    console.log("父组件的视图初始化完毕");

    // 跑出异常。Angular不允许在视图组建好后，改变值。如React里render函数里不能setState
    // this.message="hallo";

    // 如果需要在这里改变值，要用在setTimeout里，让它在另一个运行周期里运行
    setTimeout(()=>{
      this.message="hallo";
    }, 0);
  }

  ngAfterViewChecked() {
    console.log("父组件的视图变更检测化完毕");

    // 跑出异常。Angular不允许在视图组建好后，改变值。如React里render函数里不能setState
    // this.message="hallo";
  }
}
