import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  registroMode: boolean;


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {}



  registerToggle() {
    this.registroMode = !this.registroMode;
  }

  cancelRegistroMode(event: boolean) {
    this.registroMode = event;
  }




}
