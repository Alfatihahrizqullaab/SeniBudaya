import { Component } from '@angular/core';
import { BudayaService } from '../services/budaya';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambah-budaya',
  standalone: true,
  // Mengimpor modul-modul yang dibutuhkan oleh komponen
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tambah-budaya.html',
  styleUrl: './tambah-budaya.css',
})
export class TambahBudaya {

  // Variabel formData akan menampung seluruh input dari form (judul, tipe, deskripsi)
  formData: FormGroup;

  // error Message
  errorMessage = "";

  successMessage = ''

  // Untuk menyimpan file gambar yang dipilih
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private budayaService: BudayaService, private router: Router){

    // Membuat struktur form dengan validasi setiap field
    this.formData = this.fb.group({
      // Judul wajib diisi dan minimal 2 karakter
      judul: ['', [Validators.required, Validators.minLength(2)]],

      // Tipe wajib diisi dan minimal 4 karakter
      tipe: ['', [Validators.required, Validators.minLength(4)]],

      // Deskripsi wajib diisi dan minimal 10 karakter
      deskripsi: ['', [Validators.required, Validators.minLength(10)]],

      gambar: ['',[Validators.required]]
    });
  }

  // Menangkap file yang dipilih user dari input type="file"
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  // Fungsi yang dijalankan ketika user menekan tombol submit
  onSubmit(){

    // Membuat FormData untuk mengirim data termasuk file (gambar)
    const data = new FormData();
    
    // Mengambil nilai setiap field dari FormGroup
    data.append("judul", this.formData.get('judul')?.value);
    data.append("tipe", this.formData.get('tipe')?.value);
    data.append("deskripsi", this.formData.get('deskripsi')?.value);

    // Menambahkan file gambar ke FormData
    if (this.selectedFile) {
      data.append("gambar", this.selectedFile);
    }

    // Mengirim data ke backend melalui service
    this.budayaService.createBudaya(data).subscribe({
      next: (res) => {
        this.router.navigate(
          ['/budaya'],
          { state: {successMessage: 'Berhasil menyimpan budaya!'} }
        )
        console.log(res);
      },
      error: (err) => {
        this.errorMessage = 'Gagal menyimpan'
        console.error(err);

        setTimeout(() => {
          this.errorMessage = '';
        }, 3000)
      }
    });
  }
}
