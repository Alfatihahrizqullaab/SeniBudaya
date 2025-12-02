import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BudayaData as BudayaDataInterface } from './budaya_model';

@Component({
  selector: 'app-card-budaya',
  imports: [CommonModule, RouterLink],
  templateUrl: './card-budaya.html',
  styleUrl: './card-budaya.css',
})

export class CardBudaya {
  @Input() budaya: BudayaDataInterface = {
    _id: 0,
    judul: '',
    gambar: '',
    tipe: '',
    deskripsi: ''
  }

  isExpended: boolean = false; // default deskripsi dipotong

  toggleDescripksi(){
    this.isExpended = !this.isExpended;
  }
}
