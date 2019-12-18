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
    this.vehicleForm = this.formBuilder.group({
      make: ['']
    });

    // this._vehicleService.getFeatures().subscribe(results => {
    //   this.features = results;
    //   const controls = results.map(c => new FormControl(false));

    // });
  }

  populateDropDowns() {
    this.makes$ = this._vehicleService.getMakes();
    //this.feature$ = this._vehicleService.getFeatures();
  }

  changeMake(e) {
    this.vehicleForm.controls.make.setValue(e.target.value, { onlySelf: true });
  }

  ngOnInit() {}

  submit() {}
}
