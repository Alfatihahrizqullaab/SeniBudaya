import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BudayaData as BudayaDataInterface } from '../card-budaya/budaya_model';
import { BUDAYA_DATA } from '../data/budaya_data';

@Component({
  selector: 'app-budaya',
  imports: [CommonModule, RouterLink],
  templateUrl: './budaya.html',
  styleUrl: './budaya.css',
})
export class Budaya implements OnInit{

  // budayaList: BudayaDataInterface[] = [];
  budayaList: BudayaDataInterface[] = [];

  ngOnInit() {
      this.budayaList = BUDAYA_DATA;
  }
}
