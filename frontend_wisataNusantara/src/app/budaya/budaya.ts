import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink,  } from '@angular/router';
import { BudayaData as BudayaDataInterface } from '../card-budaya/budaya_model';
import { BUDAYA_DATA } from '../data/budaya_data';
import { ActivatedRoute } from '@angular/router';
import { BudayaService } from '../services/budaya';
import { AuthService } from '../services/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-budaya',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './budaya.html',
  styleUrls: ['./budaya.css'],
})
export class Budaya implements OnInit{

  // budayaList: BudayaDataInterface[] = [];
  budayaList: BudayaDataInterface[] = [];

  filteredList: BudayaDataInterface[] = [];

  // state Management
  isLoading: boolean = false;
  errorMessage: string = '';
  
  searchQuery: string = "";

  successMessage: string = '';

  selectedIdToDelete: string | number | null = null;

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
  ]

  constructor(private budayaService: BudayaService, public authService: AuthService,private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Untuk menampilkan pesan success dari state navigasi tambah budaya
    const state = history.state;
    if (state && state['successMessage']) {
      this.successMessage = state['successMessage'];
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }

    // Memuat seluruh data budaya yang ada dibackend
    this.loadBudayaData();
  }

  loadBudayaData(){
    this.isLoading = true;
    this.errorMessage = '';

    this.budayaService.getAllBudaya().subscribe({
      next: (data) => {
        this.budayaList = data;
        this.filteredList = data;
        this.isLoading = false;
        console.log('Data berhasil dimuat dari backend: ', data);
      },
      error: (err) => {
        this.errorMessage = 'Backend tidak terhubung';
        this.budayaList = this.fallbackData;
        this.filteredList = this.fallbackData;
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  // Membuka modal hapus dan menyimpan id
  openHapusModal(id: string | number){
    if(id === undefined) return;
    this.selectedIdToDelete = id;

    const modalEl = document.getElementById('hapusModal');
    if(modalEl){
      const modal = new bootstrap.Modal(modalEl);
      modal.show()
    }
  }

confrimHapus(){
  if(this.selectedIdToDelete === null) return;

  this.isLoading = true;
  this.errorMessage = '';
  const idStr = this.selectedIdToDelete.toString();

  this.budayaService.deleteBudaya(idStr).subscribe({
    next: (res) => {
      // hapus dari array lokal
      this.budayaList = this.budayaList.filter(b => b._id !== idStr);
      this.filteredList = this.filteredList.filter(b => b._id !== idStr);
      this.isLoading = false;

      // tutup modal
      const modalEl = document.getElementById('hapusModal');
      if(modalEl){
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if(modalInstance) modalInstance.hide();
      }

      // tampilkan pesan sukses
      this.successMessage = res.message || 'Budaya berhasil dihapus';
      setTimeout(() => this.successMessage = '', 3000);

      this.selectedIdToDelete = null;
    },
    error: (err) => {
      this.errorMessage = 'Gagal menghapus budaya';
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

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
