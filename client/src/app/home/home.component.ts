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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
   // this.getUsers();
  }

  // getUsers(): void {
  //   this.accountService.getUsers().subscribe(resposta => {
  //     this.users = resposta;
  //     console.log(this.users);
  //   })
  // }

  registerToggle() {
    this.registroMode = !this.registroMode;
  }
  
  cancelRegistroMode(event: boolean) {
    this.registroMode = event;
  }


}
