import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';

@Component({
  templateUrl: './message.component.html',
  styles: [
    '.message-row { margin-bottom: 10px }'
  ]
})
export class MessageComponent {
  get messages() {
    return this.message.messages;
  }

  constructor(private message: MessageService,
              private router: Router) { }
    close():void{
    this.router.navigate([{outlets:{popup:null}}]);
   this.message.isDisplayed=false;
  }
}
