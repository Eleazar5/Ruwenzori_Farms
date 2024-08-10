import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  isModalOpen = false;
  isDeleteModalOpen = false;
  deleteItem:string = '';
  customers: any;

  constructor(
    private reqService: ReqService,
  ) {}

  ngOnInit(): void {
    this.getcustomers(); 
  }


  toggleDeleteModal(id: any) {
    this.deleteItem = id;
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

  getcustomers(){
    this.reqService.customers().subscribe(
      (res: any) => {        
        this.customers = res.data;
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
