import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  selectedEngine: string | null = null;
  engines = ['Petrol', 'Diesel', 'Tesla'];

  selectedColor: string | null = null;
  colors = ['Black', 'White', 'Red', 'Yellow'];

  selectedDriveWheel: string | null = null;
  driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  selectEngineHandler(engine: string) {
    this.selectedEngine = engine;
  }

  selectColorHandler(color: string) {
    this.selectedColor = color;
  }

  selectDriveWheelHandler(driveWheel: string) {
    this.selectedDriveWheel = driveWheel;
  }

  ngOnInit() {
  }
}
