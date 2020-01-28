import { Component, OnInit } from '@angular/core';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
usersList:object;
  constructor(private data:CartListService) { }

  ngOnInit() {
    this.data.getList().subscribe(data=>{
      this.usersList = data
      console.log(this.usersList);
    }
   );
  }
}
