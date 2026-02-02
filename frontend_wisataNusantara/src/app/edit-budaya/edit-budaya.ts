import { Component, OnInit } from '@angular/core';

import { BudayaService } from '../services/budaya';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-budaya',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-budaya.html',
  styleUrl: './edit-budaya.css',
})
export class EditBudaya implements OnInit{
  formData: FormGroup;

  errorMessage = '';
  successMessage = '';

  selectedFile: File | null = null;
  id!: string;

   constructor(private fb: FormBuilder, private budayaService: BudayaService, private router: Router, private route: ActivatedRoute){

    // Membuat struktur form dengan validasi setiap field
    this.formData = this.fb.group({
      // Judul wajib diisi dan minimal 2 karakter
      judul: ['', [Validators.required, Validators.minLength(2)]],

      // Tipe wajib diisi dan minimal 4 karakter
      tipe: ['', [Validators.required, Validators.minLength(4)]],

      // Deskripsi wajib diisi dan minimal 10 karakter
      deskripsi: ['', [Validators.required, Validators.minLength(10)]],

      gambar: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadBudayaData();
  }

  loadBudayaData(){
    this.budayaService.getBudayaById(this.id).subscribe({
      next: (data) => {
        this.formData.patchValue({
          judul: data.judul,
          tipe: data.tipe,
          deskripsi: data.deskripsi
        });
      },
      error: () => {
        this.errorMessage = 'Gagal memuat data budaya';
      }
    })
  }

  // Menangkap file yang dipilih user dari input type="file"
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  Submit(){
    const data = new FormData();

    data.append("judul", this.formData.get('judul')?.value);
    data.append("tipe", this.formData.get('tipe')?.value);
    data.append("deskripsi", this.formData.get('deskripsi')?.value);

    if (this.selectedFile) {
      data.append("gambar", this.selectedFile);
    }

    this.budayaService.editBudaya(this.id, data).subscribe({
      next: (res) => {
        this.router.navigate(
          ['/budaya'],
          {state: {successMessage: 'Berhasil mengupdate budaya'}}
        )
        console.log(res);
      },
      error: (err) => {
        this.errorMessage = 'Gagal mengupdate'

        setTimeout(() => {
          this.errorMessage = '';
        }, 3000)
      }
    })
  }
}
