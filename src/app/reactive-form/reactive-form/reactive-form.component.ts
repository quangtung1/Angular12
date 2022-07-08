import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name : new FormControl(''),
  //   age :new FormControl('')
  // });

  public profileFrom =  this.fb.group({
    name: ['',Validators.required],
    age: ['',Validators.required],

  });

  constructor(private common: CommonService,private fb : FormBuilder) { }

  ngOnInit(): void {

  }
  public submitForm(){
    // console.log('Submit form: ' , this.formData.value);
    this.common.submitData(this.profileFrom.value);

  }
}
