import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item = [];
  constructor(private service: HomeService) {
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getvideo().subscribe((item: any) => {
        this.item = item.items;

      } ,
      err => {
        console.error(err);
      },
      () => {
        console.log('!!!!!DONE!!!!');
      }
    );
  }
}
