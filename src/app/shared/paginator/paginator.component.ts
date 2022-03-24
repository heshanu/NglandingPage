import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  //todo makes sure we recicve this value from parent com withour @input()
  numberOfPages: number=5;
  pageOptions!:number[];

  currentPage=1;


  constructor() {
    this.pageOptions=[
      this.currentPage-2,
      this.currentPage-1,
      this.currentPage,
      this.currentPage+1,
      this.currentPage+2
    ].filter(pageNumber=>pageNumber>=1 && pageNumber<=this.numberOfPages);
   }

  ngOnInit(): void {
  }

}
