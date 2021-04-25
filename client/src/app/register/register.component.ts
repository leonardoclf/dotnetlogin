import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // parent to child
  // @Input() usersFromHomeComponent: any;
  // child to parent - eventemitter from angular/core
  @Output() cancelRegistro = new EventEmitter();



  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    console.log('cancelled');
    // emit (value that is emit)
    this.cancelRegistro.emit(false);
  }

}

