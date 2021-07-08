import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICardItem } from 'src/app/models/card-item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() cardItem: ICardItem = {};
  @Output() emitAlert = new EventEmitter();

  constructor() {}

  public emitEvent($event: any): void {
    this.emitAlert.emit($event);
  }
  public ngOnInit(): void {
  }
}
