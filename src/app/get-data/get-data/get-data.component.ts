import { HttpServerService } from './../../../Service/Http-Server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private httpGetData: HttpServerService) { }

  public ngOnInit(): void {
    this.httpGetData.getComments().subscribe(data=>{
      console.log('Data',data)
    })

  }

  public getData():void {
    this.httpGetData.getComments2(5).subscribe(data=>{
      console.log('Data',data);
    })
  }

}
