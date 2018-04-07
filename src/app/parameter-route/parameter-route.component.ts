import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-parameter-route',
  templateUrl: './parameter-route.component.html',
  styleUrls: ['./parameter-route.component.css']
})
export class ParameterRouteComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params.id
    });
  }

  ngOnInit() {
  }

}
