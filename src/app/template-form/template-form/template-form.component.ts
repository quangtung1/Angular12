import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  public name ='';
  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

  public submitForm(){
    console.log('Submit form: ' + this.name);
    this.common.submitData(this.name);
  }

}
