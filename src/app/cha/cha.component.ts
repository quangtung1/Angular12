import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';
@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  @ViewChild('teo') teo :ConComponent|undefined;
  @ViewChild('tung')tung:ConComponent|undefined;

  public chaMess = '';
  constructor() { }

  ngOnInit(): void {
  }

  public conGoi(name: string){
    console.log('Đứa nào gọi tao đó bay : ' + name );
    this.chaMess = 'Chào con : ' + name;
  }
  public choTien(){
    this.teo?.choTien(10);
    this.tung?.choTien(24);
  }
}
