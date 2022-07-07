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
  public city = [{city:'An Giang',district:['Thành phố Châu Đốc','Thành phố Long Xuyên','Huyện Phú Châu','Huyện Châu Thành']}
  ,{city:'Bắc Kạn',district:['Thành phố Bắc Kạn','Huyện Na Rì','Huyện Chợ Đồn','Huyện Ba Bể']} ];
public districts:string[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log('Trái cây = ',this.city);

  }
  public resetName():void{
    console.log('resetName');
    this.name = '';
  }
  public changeCity(event: any){
    console.log('event',event.target.value);
    const city = event.target.value;
    //Cách 1
    // const search = this.city.filter(data=>data.city === city);
    // console.log('Search: '+ search);

    // if(search && search.length>0){
    //   this.districts = search[0].district;
    // }
    //Cách 2

    this.districts = this.city.find(data => data.city==city)?.district||[];

  }

}
