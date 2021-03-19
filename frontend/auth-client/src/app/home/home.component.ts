import { Component, OnInit } from '@angular/core';
import { RequestService } from '../req/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private req: RequestService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.req.get('v1/user/').subscribe(res => {
      console.log(res)
    })
  }

}
