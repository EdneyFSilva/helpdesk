import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/model/summary.model';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary: Summary = new Summary();
  classCss: {};
  message: {};

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.ticketService.summary().subscribe(( resposonseApi: ResponseApi) => {
      this.summary = resposonseApi.data;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 13000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    };
    this.classCss['alert-' + type] = true;
  }

}
