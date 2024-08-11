import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  isModalOpen = false;
  isDeleteModalOpen = false;
  deleteItem:string = '';
  products:any;

  productData: object = {}

  productname: string = '';
  unitprice: string = '';
  total_quantity: string = '';

  constructor(
    private reqService: ReqService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getproducts(); 
  }
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  toggleDeleteModal(id: any) {
    this.deleteItem = id;
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

  getproducts(){
    this.reqService.products().subscribe(
      (res: any) => {        
        this.products = res.data;
      },  
      (error: any) => {         
        console.log(error)
      }
    );
  }

  saveProduct(){
    this.productData = {
      "productname" : this.productname,
      "unit_price" : this.unitprice,
      "total_quantity" : this.total_quantity
    } 
    this.reqService.saveproduct(this.productData).subscribe(
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
