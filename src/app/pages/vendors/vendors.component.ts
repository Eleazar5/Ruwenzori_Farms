import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { ToastService } from 'src/app/services/toast.service';

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

  vendorData: object = {}

  email: string = '';
  firstname: string = '';
  lastname: string = '';
  phone: string = '';

  constructor(
    private reqService: ReqService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getvendors(); 
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
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

  saveVendor(){
    this.vendorData = {
      "email" : this.email,
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "phone" : this.phone
    } 
    this.reqService.savevendor(this.vendorData).subscribe(
      (res: any) => {        
        if(res.success == 1){
          this.toastService.showSuccess(res.errorDesc);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }else{
          this.toastService.showError(res.errorDesc);
        }
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
