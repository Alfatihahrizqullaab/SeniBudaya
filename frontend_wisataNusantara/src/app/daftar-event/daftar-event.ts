  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { DaftarEventService } from '../services/daftar-event.service';
  import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { from } from 'rxjs';
  import { ActivatedRoute } from "@angular/router";


  @Component({
    selector: 'app-daftar-event',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './daftar-event.html',
    styleUrl: './daftar-event.css',
  })
  export class DaftarEvent{
    formDaftar: FormGroup;

    errorMessage = '';
    successMessage = '';

    eventId : string = '';

    // selectedFile: File | null = null 

    constructor(private fb: FormBuilder, private daftarEventService: DaftarEventService, private route: ActivatedRoute){
      this.eventId = this.route.snapshot.paramMap.get('id') || '';
      this.formDaftar = this.fb.group({
        Nik: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        usia: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
        tanggalLahir: ['', [Validators.required]],
        tempatTinggal: ['', [Validators.required, Validators.minLength(3)]],
      })
    }

    onSubmit(){
      const data = {
        Nik: this.formDaftar.get('Nik')?.value,
        fullName: this.formDaftar.get('fullName')?.value,
        usia: Number(this.formDaftar.get('usia')?.value),
        tempatTinggal: this.formDaftar.get('tempatTinggal')?.value,
        tanggalLahir: this.formDaftar.get('tanggalLahir')?.value,
        event: this.eventId
      };

      this.daftarEventService.daftarEvent(data).subscribe({
        next: (res) => {
          this.successMessage = 'Nama anda telah didaftarkan di acara event'
          console.log(res);

          setTimeout(() => {
            this.successMessage = '';
            this.formDaftar.reset();
          }, 3000)
        },
        error: (err) => {
          this.errorMessage = 'Gagal didaftarkan: ' + (err.error?.message || err.message)
          console.error(err);

          setTimeout(() => {
            this.errorMessage = '';
          }, 3000)
        }
      })
    }
  }
