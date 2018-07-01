import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {
  private var_five: any;
  constructor() {
    this.var_five = ' I am from child two component !!';
  }

  ngOnInit() {}
}
