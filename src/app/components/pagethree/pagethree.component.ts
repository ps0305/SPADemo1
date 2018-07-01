import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {
  private var_three: any;
  constructor() {
    this.var_three = "I'm from page three component !!";
  }

  ngOnInit() {}
}
