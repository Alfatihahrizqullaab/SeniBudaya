import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BudayaData as BudayaDataInterface } from './budaya_model';

@Component({
  selector: 'app-card-budaya',
  imports: [CommonModule],
  templateUrl: './card-budaya.html',
  styleUrl: './card-budaya.css',
})

export class CardBudaya {
  @Input() budaya: BudayaDataInterface = {
    id: 0,
    judul: '',
    gambar: '',
    tipe: '',
    description: '',
    tanggalPost: new Date(),
  }

  isExpended: boolean = false; // default deskripsi dipotong

  toggleDescripksi(){
    this.isExpended = !this.isExpended;
  }
}
