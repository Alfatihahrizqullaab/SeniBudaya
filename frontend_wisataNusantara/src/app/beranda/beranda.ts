import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBudaya as CardBudayaComponent } from '../card-budaya/card-budaya';
import { RouterLink } from '@angular/router';
import { BudayaData as BudayaDataInterface } from '../card-budaya/budaya_model';
import { BUDAYA_DATA } from '../data/budaya_data';



@Component({
  selector: 'app-beranda',
  imports: [CommonModule, CardBudayaComponent],
  templateUrl: './beranda.html',
  styleUrl: './beranda.css',
})
export class Beranda implements OnInit{
  // budayaList: BudayaDataInterface[] = [];
   budayaList: BudayaDataInterface[] = [];

  ngOnInit() {
      this.budayaList = BUDAYA_DATA;
  }
}
