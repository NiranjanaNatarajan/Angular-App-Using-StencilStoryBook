import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];

  constructor(private datePipe: DatePipe) { }

  log(message: string) {
    this.messages.push(message + ' on ' + this.datePipe.transform(new Date(), 'dd/mm/yyyy hh:mm:ss aa'));
    console.log(this.messages);
  }
}
