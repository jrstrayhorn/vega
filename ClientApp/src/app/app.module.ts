import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { VehicleDetailComponent } from "./vehicle-detail/vehicle-detail.component";
import { VehicleService } from "./vehicle/vehicle.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent },
      { path: "vehicle", component: VehicleDetailComponent }
    ])
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
