import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent {
  isModalOpen = false;
  isDeleteModalOpen = false;
  deleteItem:string = '';
  vendors: any;

  constructor(
    private reqService: ReqService,
  ) {}

  ngOnInit(): void {
    this.getvendors(); 
  }

  toggleDeleteModal(id: any) {
    this.deleteItem = id;
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

  getvendors(){
    this.reqService.vendors().subscribe(
      (res: any) => {        
        this.vendors = res.data;
      },  
      (error: any) => {         
        console.log(error)
      }
    );
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
