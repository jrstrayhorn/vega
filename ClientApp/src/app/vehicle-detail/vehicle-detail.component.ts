import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
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
  features;

  constructor(
    private formBuilder: FormBuilder,
    private _vehicleService: VehicleService
  ) {
    this.createForm();
    this.populateDropDowns();
  }

  createForm() {
    this._vehicleService.getFeatures().subscribe(results => {
      this.features = results;
      const controls = results.map(c => new FormControl(false));
      this.vehicleForm = this.formBuilder.group({
        make: "",
        isRegistered: "",
        features: new FormArray(controls),
        contactName: "",
        contactPhone: "",
        contactEmail: ""
      });
    });
  }

  populateDropDowns() {
    this.makes$ = this._vehicleService.getMakes();
    this.feature$ = this._vehicleService.getFeatures();
  }

  ngOnInit() {}

  submit() {}
}
