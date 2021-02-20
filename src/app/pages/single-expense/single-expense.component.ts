import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-single-expense',
  templateUrl: './single-expense.component.html',
  styleUrls: ['./single-expense.component.css']
})


export class SingleExpenseComponent implements OnInit {

  
  public items: MenuItem[] = [];
  public home: MenuItem = {};
  displayedColumns: string[] = [ 'name', 'price', 'portion','card'];
  dataSource = [
  {name: "lazer", price:3443, portion: 3, card:3 }
  ];;
  val: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];



    this.home = { icon: 'pi pi-home', routerLink: '/' };


  }
}
