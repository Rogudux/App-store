import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopService } from '../core/services/shop.service';
import { ShopComponent } from './shop.component/shop.component';
import { ProductsComponent } from './products/products';
import { OrdersComponents } from './orders/orders';
import { InvoicesComponent } from './invoices/invoices';
import { RouterModule } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { OrderService } from '../core/services/order.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { OrderDetail } from './order-detail/order-detail';
import { adminRoutes } from './pages.routes';



@NgModule({
  declarations: [
    ShopComponent,InvoicesComponent,ProductsComponent,OrdersComponents,AdminLayout,OrderDetail
  ],
  imports: [
    NzTableModule, NzIconModule, NzButtonModule, NzCardModule, CommonModule, RouterModule.forChild(adminRoutes), NzTagModule
  ],
  providers: [ShopService, OrderService],
  exports:[
    ShopComponent,
    InvoicesComponent,
    OrdersComponents,
    ProductsComponent,
    AdminLayout,
    RouterModule,
    OrderDetail

  ] 
})
export class PagesModule { }


