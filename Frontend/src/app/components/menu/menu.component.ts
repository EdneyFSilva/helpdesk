import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shered.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  shared: SharedService;

  constructor() {
    this.shared = SharedService.getInstace();
   }

  ngOnInit() {
  }

}
