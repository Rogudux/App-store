import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { ProductsComponent } from "./products/products";
import { InvoicesComponent } from "./invoices/invoices";
import { OrdersComponents } from "./orders/orders";
import { ShopComponent } from "./shop.component/shop.component";
import { OrderDetail } from "./order-detail/order-detail";

export const adminRoutes : Routes = [
    {
        path: "admin",
        component : AdminLayout,
        children: [
            {path:"products",
                component: ProductsComponent
            },
            {
                path:"invoices",
                component: InvoicesComponent
            },
            {
                path:"orders",
                component: OrdersComponents
            },
            {
                path:'orders/:id',
                component: OrderDetail
            },
            {
                path: "shop",
                component: ShopComponent
            },
            {
                path: "",
                pathMatch:"full",
                redirectTo:"shop"
            }
        ]
    }
]