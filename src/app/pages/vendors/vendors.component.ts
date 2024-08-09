import { Component } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent {
  isModalOpen = false;
  isDeleteModalOpen = false;
  deleteItem:string = '';

  toggleDeleteModal(id: any) {
    this.deleteItem = id;
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

  deleteItems(confirm: boolean){
    if(confirm){
      console.log('You have deleted '+this.deleteItem)
      this.toggleDeleteModal(confirm)
    }else{
      this.toggleDeleteModal(confirm)
      console.log('Canceled deletion of '+this.deleteItem)
    }
  }
}
