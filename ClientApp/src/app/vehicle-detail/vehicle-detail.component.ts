import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { VehicleService } from "../vehicle/vehicle.service";

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.css"]
})
export class VehicleDetailComponent implements OnInit {
  vehicleForm: FormGroup;
  makes$;
  feature$;

  constructor(
    private formBuilder: FormBuilder,
    private _vehicleService: VehicleService
  ) {
    this.createForm();
    this.populateDropDowns();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group({
      make: "",
      //model: '',
      isRegistered: "",
      features: "",
      contactName: "",
      contactPhone: "",
      contactEmail: ""
    });
  }

  populateDropDowns() {
    this.makes$ = this._vehicleService.getMakes();
    this.feature$ = this._vehicleService.getFeatures();
  }

  ngOnInit() {}
}
