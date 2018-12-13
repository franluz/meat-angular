import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestauranteComponent } from "./restaurante/restaurante.component";
import { RestauranteDetailComponent } from "./restaurante-detail/restaurante-detail.component";
import { MenuComponent } from "./restaurante-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurante-detail/reviews/reviews.component";
import { OrderComponent } from "./order/order.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

export const ROUTER: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'restaurante/:id', component: RestauranteDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'restaurante', component: RestauranteComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order-summary', component: OrderSummaryComponent }
]