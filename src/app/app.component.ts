import { Component, OnInit } from "@angular/core";
import {
  Routes,
  Router,
  NavigationStart,
  ActivatedRoute
} from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "lazyload";
  constructor(
    public activeRoute: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit() {
    //activeRoute当前活动的路由   获取url中的参数  在那个组件中要用就在那个组件中打印， 这里是没有数据的
    // this.activeRoute.params.subscribe(
    //   params => {
    //     console.log(params);
    //   }
    // );
    // this.router.events.subscribe(event => {
    //   console.log(event);
    //   //可以用instanceof来判断事件的类型，然后去做你想要做的事情
    //   // console.log(event instanceof NavigationStart);
    // });
  }
}
