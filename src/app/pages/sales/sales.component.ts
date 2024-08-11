import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  isModalOpen = false;
  isDeleteModalOpen = false;
  deleteItem:string = '';
  sales: any;

  saleData: object = {}

  customername: string = '';
  item_name: string = '';
  phone_number: string = '';
  quantity: string = '';
  payment_mode: string = '';
  sale_amount: string = '';

  constructor(
    private reqService: ReqService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getsales(); 
  }
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  toggleDeleteModal(id: any) {
    this.deleteItem = id;
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

  getsales(){
    this.reqService.sales().subscribe(
      (res: any) => {        
        this.sales = res.data;
      },  
      (error: any) => {         
        console.log(error)
      }
    );
  }

  saveSale(){
    this.saleData = {
      "customername": this.customername,
      "item_name": this.item_name,
      "phone_number": this.phone_number,
      "quantity": this.quantity,
      "payment_mode": this.payment_mode,
      "sale_amount": this.sale_amount
    }
    this.reqService.savesale(this.saleData).subscribe(
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
