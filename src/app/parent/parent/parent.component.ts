import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServerService } from './../../../Service/Http-Server.service';
import { Component, OnInit } from '@angular/core';
import { ParentServiceService } from './parent-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public users =[];


   public form : FormGroup;
  constructor(private http : HttpServerService, private fb: FormBuilder,private parentS : ParentServiceService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  public refreshData() : void {
    this.http.getComments2(3).subscribe(
      data=>{
        console.log('Data : ',data);
        this.users = data ?.results?.slice(0,5);

        console.log('Parent: ',this.users);

    })
  }
  public clickData(data:any){
    console.log('Data: ',data);
    this.parentS.getApi(data).subscribe(api => {
      console.log('Api: ',api);
    })
  }

  public clickData2(){

    this.parentS.getCallApi().subscribe(api => {
      console.log('Api: ',api);
    })
  }

}
