import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  public list: any[] = [];
  constructor(private service: HomeService) { }
  ngOnInit(): void {
    this.service.getApiInfo().subscribe((list:any) => {
      this.list = list;
    })
  }
}
