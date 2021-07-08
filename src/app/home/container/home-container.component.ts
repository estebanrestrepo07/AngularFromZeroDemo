import { HomeService } from './../../services/home.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  public title: string = "The Breaking Bad Cast"
  public list: any[] = [];
  public destroy$:Subject<void> = new Subject<void>();

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getApiInfo().pipe(takeUntil(this.destroy$)).subscribe((list:any) => {
      this.list = list;
    });
  }

  public showAlert($event:string): void {
    alert($event);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
