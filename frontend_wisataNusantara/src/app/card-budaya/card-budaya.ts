import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BudayaData as BudayaDataInterface } from './budaya_model';

@Component({
  selector: 'app-card-budaya',
  imports: [CommonModule],
  templateUrl: './card-budaya.html',
  styleUrl: './card-budaya.css',
})

export class CardBudaya {
  @Input() budaya: BudayaDataInterface = {
    _id: '0',
    judul: '',
    gambar: '',
    tipe: '',
    deskripsi: ''
  }

  isLongText: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLongText = this.budaya.deskripsi.length > 120; 
    // bisa kamu atur mau berapa
  }

  goToDetail() {
    this.router.navigate(['/detail-budaya', this.budaya._id]);
  }
}
