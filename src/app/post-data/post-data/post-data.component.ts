import { HttpServerService } from './../../../Service/Http-Server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpPost : HttpServerService) { }

  ngOnInit(): void {
    const payload ={ "body": "some comment 3", "postId": 3 };
    this.httpPost.postMethod(payload).subscribe(data=>{
      console.log('Data: ',data);
    });
  }

}
