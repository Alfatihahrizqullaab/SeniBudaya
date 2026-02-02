import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBudaya as CardBudayaComponent } from '../card-budaya/card-budaya';
import { RouterLink, Router } from '@angular/router';
import { BudayaService } from '../services/budaya';
import { FormsModule } from '@angular/forms';
import { BudayaData as BudayaDataInterface } from '../card-budaya/budaya_model';
import { BUDAYA_DATA } from '../data/budaya_data';
import { EventService } from '../services/event.service';
import { eventInterface as EventInterface } from '../event/event-model';



@Component({
  selector: 'app-beranda',
  imports: [CommonModule, CardBudayaComponent, FormsModule],
  templateUrl: './beranda.html',
  styleUrl: './beranda.css',
})
export class Beranda implements OnInit{
  // budayaList: BudayaDataInterface[] = [];
   budayaList: BudayaDataInterface[] = [];
   eventList: EventInterface[] = [];

   filteredList: BudayaDataInterface[] = [];
   filteredEventList: EventInterface[] = [];

   isLoading: boolean = false;
   errorMessage: string = '';
   searchQuery: string = '';
   succesMessage: string = '';

   private fallbackData: BudayaDataInterface[] = [
    {
        _id: '1',
        judul: 'Tari Kecak',
        gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        tipe: 'Tarian',
        deskripsi: 'Tari Kecak adalah tarian tradisional Bali dengan ciri khas suara "cak" berirama.',
    },
    {
        _id: '2',
        judul: 'Wayang Kulit',
        gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        tipe: 'Pertunjukan',
        deskripsi: 'Wayang kulit merupakan seni pertunjukan tradisional Jawa dengan bayangan kulit.',
        
    },
    {
        _id: '3',
        judul: 'Rumah Adat Gadang',
        gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        tipe: 'Arsitektur',
        deskripsi: 'Rumah Gadang adalah rumah adat Minangkabau dengan bentuk unik melengkung ke atas.',      
    }
  ];

  private fallbackEventData: EventInterface[] = [
    {
      _id: '1',
      judulEvent: 'Festival Budaya Nusantara',
      gambar: 'https://i.pinimg.com/originals/dd/7f/02/dd7f02db667e75671ca275508e6f405c.png',
      lokasi: 'Lapangan Merdeka, Jakarta',
      harga: 0,
      tanggalEvent: new Date(),
      jamEvent: '10:00',
      peserta: 0,
      pesertaTerdaftar: 0
  },
   {
      _id: '2',
      judulEvent: 'Festival Hebat Nusantara',
      gambar: 'https://i.pinimg.com/originals/dd/7f/02/dd7f02db667e75671ca275508e6f405c.png',
      lokasi: 'Lapangan Merdeka, Jakarta',
      harga: 0,
      tanggalEvent: new Date(),
      jamEvent: '09:00',
      peserta: 0,
      pesertaTerdaftar: 0
  },
  ]

  constructor(private budayaService: BudayaService, private eventService: EventService){}

  ngOnInit() {
    this.loadBudayaData();
    this.loadEventData();
  }

  loadBudayaData(){
    this.isLoading = true;
    this.errorMessage = '';

    this.budayaService.getAllBudaya().subscribe({
      next: (data) => {
        this.budayaList = data;
        this.filteredList = data;
        this.isLoading = false;
        console.log('Data Budaya dimuat: ', data);
      },
      error: (err) => {
        this.errorMessage = 'Backend tidak terhubung';
        this.budayaList = this.fallbackData;
        this.filteredList = this.fallbackData;
        this.isLoading = false;
        console.error(err);
      }
    })
  }

  loadEventData(){
    this.isLoading = true;
    this.errorMessage = '';

    this.eventService.getAllEvent().subscribe({
      next: (data) => {
        console.log('Data Event dimuat: ', data);
        this.eventList = data;
        this.filteredEventList = data;
        this.isLoading = false;
        console.log('Data event berhasil dimuat: ', data);
      },
        error: (err) => {
          this.errorMessage = 'Backend tidak terhubung';
          this.eventList = this.fallbackEventData;
          this.filteredEventList = this.fallbackEventData;
          this.isLoading = false;
          console.error(err);
      }
    });
  }

  searchBudaya(){
    this.applySearch();
  }

  private applySearch(){
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredList = this.budayaList.filter(budaya => 
      budaya.judul.toLowerCase().includes(query) ||
      budaya.tipe.toLowerCase().includes(query) ||
      budaya.deskripsi.toLowerCase().includes(query)
    )
  }

  clearSearch(){
    this.searchQuery = '';
    if(!this.searchQuery){
      this.filteredList = [...this.budayaList];
    }
  }
}
