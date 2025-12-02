import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudayaService } from '../services/budaya';
import { BudayaData } from '../card-budaya/budaya_model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-budaya',
  imports: [CommonModule],
  templateUrl: './detail-budaya.html',
  styleUrls: ['./detail-budaya.css']
})
export class DetailBudaya implements OnInit {
  budaya: BudayaData | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private budayaService: BudayaService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // tetap string
      this.loadBudayaDetail(id);
    });
  }

  loadBudayaDetail(id: string) {
    this.isLoading = true;
    this.errorMessage = '';

    this.budayaService.getBudayaById(id).subscribe({
      next: (data) => {
        this.budaya = data;
        this.isLoading = false;
        console.log('Detail Budaya dimuat:', data);
      },
      error: (err) => {
        this.errorMessage = 'Detail Budaya tidak ditemukan';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
