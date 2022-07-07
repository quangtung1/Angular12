import { HighLightDirective } from './../directive/HighLight.directive';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public loginName = 'admin';
  public counter = 0;
  public counterLuyThua = 0;
  constructor(private common : CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterLuyThua = this.common.luyThua(this.counter);
    this.common.counter++;
  }

}
