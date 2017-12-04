import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  private footer:Array<foot>;
  constructor() { }

  ngOnInit() {
    this.footer = [
      new foot("/list","清单",""),
      new foot("/classify","分类",""),
      new foot("/mine","我的","")
    ]
  }

}
export class foot{
  constructor(
    public path:string,
    public title:string,
    public icon:string

  ){

  }
}