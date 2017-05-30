import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-username',
  templateUrl: './add-username.component.html',
  styleUrls: ['./add-username.component.css']
})
export class AddUsernameComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  //could also just use username = '' on the [click] function
  // onResetUserName(){
  //   this.userName = '';
  // }

}
