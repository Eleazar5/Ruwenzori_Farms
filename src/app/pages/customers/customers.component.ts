import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  isModalOpen:boolean = false;
  isEditModalOpen:boolean = false;
  isDeleteModalOpen:boolean = false;
  customers: any[] = [];
  customerId: number | null = null;
  deleteItem: any = null;
  customerData: any = {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    phone_number: ''
  };

  constructor(
    private reqService: ReqService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getcustomers(); 
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.resetForm();
  }


  toggleEditModal(id: number | null) {
    this.isEditModalOpen = !this.isEditModalOpen;
    if (id) {
      this.customerId = id;
      this.fetchCustomerData(id);
    } else {
      this.resetForm();
    }
  }
  
  fetchCustomerData(id: number) {
    this.reqService.getCustomerById(id).subscribe((data: any) => {
      this.customerData = data.data;
    });
  }

  resetForm() {
    this.customerData = {
      id: null,
      firstname: '',
      lastname: '',
      email: '',
      phone_number: ''
    };
  }

  updateCustomer() {
    if (this.customerId) {
      this.reqService.updateCustomer(this.customerId, this.customerData).subscribe(() => {
        this.toastService.showSuccess("Customer updated successfully");
        this.toggleEditModal(null);
        this.getcustomers();  // Refresh customer list
      }, error => {
        this.toastService.showError("Error updating customer");
      });
    }
  }

  toggleDeleteModal(id: any) {
    this.deleteItem = id;
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

  getcustomers() {
    this.reqService.customers().subscribe(
      (res: any) => {        
        this.customers = res.data;
      },  
      (error: any) => {         
        this.toastService.showError("Error fetching customers");
      }
    );
  }

  saveCustomer() {
    this.reqService.savecustomers(this.customerData).subscribe(
      (res: any) => {        
        if (res.success == 1) {
          this.toastService.showSuccess(res.errorDesc);
          this.toggleModal();
          this.getcustomers();  // Refresh customer list
        } else {
          this.toastService.showError(res.errorDesc);
        }
      },  
      (error: any) => {         
        this.toastService.showError("Error saving customer");
      }
    );
  }

  deleteItems(confirm: boolean) {
    if (confirm && this.deleteItem) {
      this.reqService.deletecustomer(this.deleteItem).subscribe(
        (res: any) => {        
          if (res.success == 1) {
            this.toastService.showSuccess(res.errorDesc);
            this.getcustomers();  // Refresh customer list
          } else {
            this.toastService.showError(res.errorDesc);
          }
          this.toggleDeleteModal(null);
        },  
        (error: any) => {         
          this.toastService.showError("Error deleting customer");
        }
      );
    } else {
      this.toggleDeleteModal(null);
    }
  }

  contactCustomer(phoneNumber: any) {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      this.toastService.showError("Invalid phone number");
    }
  }
}
