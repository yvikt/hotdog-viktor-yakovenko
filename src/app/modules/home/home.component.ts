import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getGallery()
      .subscribe(result => {
        this.list = result;
        this.list = this.list.filter(item => Date.parse(item.expirationDate) > Date.now());
      });
  }


}
