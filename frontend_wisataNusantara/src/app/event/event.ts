import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
import { eventInterface } from './event-model';
import { FormsModule } from '@angular/forms';
import { Util } from '../utils/util';



@Component({
  selector: 'app-event',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event implements OnInit{
  eventList: eventInterface[] = [];
  filteredList: eventInterface[] = [];

  isLoading: boolean = false;
  errorMessage: string = '';

  searchQuery: string = '';
  successMessage: string = '';

  private fallbackData: eventInterface[] = [
    {
      judulEvent: 'Festival Budaya Nusantara',
      gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
      lokasi: 'Lapangan Merdeka, Jakarta',
      harga: 25000,
      tanggalEvent: new Date('2025-01-15'),
      jamEvent: '18:00',
      peserta: 50
  },
  {
      judulEvent: 'Pameran Batik Nasional',
      gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
      lokasi: 'Gedung Kesenian Solo',
      harga: 0, // gratis
      tanggalEvent: new Date('2025-02-03'),
      jamEvent: '09:00',
      peserta: 100
  },
  {
      judulEvent: 'Workshop Tari Tradisional',
      gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
      lokasi: 'Sanggar Seni Bali',
      harga: 15000,
      tanggalEvent: new Date('2025-03-11'),
      jamEvent: '14:00',
      peserta: 30
  }
  ]

  constructor(private eventService: EventService){}

  ngOnInit(): void {
      this.loadEventData();
  }

  loadEventData(){
    this.isLoading = true;
    this.errorMessage = ''

    this.eventService.getAllEvent().subscribe({
      next: (data) => {
        // ubah setiap tanggalEvent menjadi Date
        const converted = data.map((item: any) => ({
          ...item,
          tanggalEvent: new Date(item.tanggalEvent)
        }));
        this.eventList = converted;
        this.filteredList = converted;
        this.isLoading = false;
        console.log('Data berhasil dimuat dari backend: ', data);
      },
      error: (err) => {
        this.errorMessage = "Backend tidak terhubung"
        this.eventList = this.fallbackData;
        this.filteredList = this.fallbackData;
        this.isLoading = false;
        console.log(err)
      }
    })
  }

  formatDate(tanggal: Date){
    return Util.formatDate(tanggal);
  }

  formatPrice(harga: number){
    return Util.formatPrice(harga);
  }

  searchEvent(){
    this.applySearch();
  }

  private applySearch(){
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredList = this.eventList.filter(event => 
      event.judulEvent.toLowerCase().includes(query) ||
      event.lokasi.toLowerCase().includes(query)
    )
  }

  clearSearch(){
    this.searchQuery = '';
    if(!this.searchQuery){
      this.filteredList = [...this.eventList]
    }
  }

  // // Format harga ke Rupiah
  // formatPrice(harga: number): string {
  //   return new Intl.NumberFormat('id-ID', {
  //     style: 'currency',
  //     currency: 'IDR',
  //     minimumFractionDigits: 0
  //   }).format(harga);
  // }
}
