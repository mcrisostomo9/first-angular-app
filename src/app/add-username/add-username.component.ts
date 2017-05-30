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

  onResetUserName(){
    this.userName = '';
  }

}
