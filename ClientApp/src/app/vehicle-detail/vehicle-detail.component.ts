import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { VehicleService } from "../vehicle/vehicle.service";
import { Make, Model, Feature } from "../data-model";

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.css"]
})
export class VehicleDetailComponent implements OnInit {
  vehicleForm: FormGroup;
  makes: Make[];
  features: Feature[];
  models: Model[];

  constructor(
    private formBuilder: FormBuilder,
    private _vehicleService: VehicleService
  ) {
    this.createForm();
    this.populateDropDowns();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group({
      make: [""],
      model: [""],
      isRegistered: [false],
      featureArray: this.formBuilder.array([]),
      contactName: [],
      contactPhone: [],
      contactEmail: []
    });
  }

  onCheckboxChange(e) {
    const featureArray: FormArray = this.vehicleForm.get(
      "featureArray"
    ) as FormArray;

    if (e.target.checked) {
      featureArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      featureArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          featureArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  populateDropDowns() {
    this._vehicleService.getMakes().subscribe(results => {
      this.makes = results;
    });
    this._vehicleService.getFeatures().subscribe(results => {
      this.features = results;
    });
  }

  changeMake(e) {
    this.vehicleForm.controls.make.setValue(e.target.value, { onlySelf: true });
    // setup models
    let selectedMake = this.makes.find(make => make.id == e.target.value);
    if (selectedMake) {
      this.models = selectedMake.models;
    } else {
      this.models = [];
    }
  }

  changeModel(e) {
    this.vehicleForm.controls.model.setValue(e.target.value, {
      onlySelf: true
    });
  }

  ngOnInit() {}

  submit() {}
}
