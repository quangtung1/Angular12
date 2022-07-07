import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Tùng Đẹp Trai';
  public age = 25;
  public traiCay=['Táo','Vải','Cam','Quýt'];
  public traiCay2 = [{ten:'Táo',gia:120000},{ten:'Vải',gia:0}];
  constructor() { }

  ngOnInit(): void {
    console.log('Trái cây = ',this.traiCay);

  }
  public resetName():void{
    console.log('resetName');
    this.name = '';
  }

}
