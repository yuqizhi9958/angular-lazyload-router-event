import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart } from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( public router: Router,
    public activeRoute: ActivatedRoute) { }

  ngOnInit() {
     //activeRoute当前活动的路由   获取url中的参数
    this.activeRoute.params.subscribe(
      (params) => { console.log(params) }
    );
    this.router.events.subscribe(event => {
      console.log(event);
      //可以用instanceof来判断事件的类型，然后去做你想要做的事情
      console.log(event instanceof NavigationStart);
    });
  }

}
