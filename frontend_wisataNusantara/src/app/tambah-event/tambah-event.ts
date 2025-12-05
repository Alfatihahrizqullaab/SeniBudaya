import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, ValidationErrors, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tambah-event',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tambah-event.html',
  styleUrl: './tambah-event.css',
})
export class TambahEvent {

  formEvent: FormGroup;

  errorMessage = '';
  successMessage = '';

  selectedFile: File | null = null

  constructor(private fb: FormBuilder, private eventService: EventService ){
    this.formEvent = this.fb.group({
      judulEvent: ['', [Validators.required]],
      gambar: ['',[Validators.required]],
      lokasi: ['',[Validators.required]],
      harga: ['',[Validators.required]],
      tanggalEvent: ['',[Validators.required]],
      jamEvent: ['', [Validators.required]],
      peserta: ['',[Validators.required, Validators.max(100), Validators.min(1)]]
    })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    const data = new FormData();

    data.append('judulEvent', this.formEvent.get('judulEvent')?.value);
    data.append('lokasi', this.formEvent.get('lokasi')?.value);
    data.append('harga', this.formEvent.get('harga')?.value);
    data.append('tanggalEvent', this.formEvent.get('tanggalEvent')?.value);
    data.append('jamEvent', this.formEvent.get('jamEvent')?.value);
    data.append('peserta', this.formEvent.get('peserta')?.value);

    if(this.selectedFile){
      data.append("gambar", this.selectedFile)
    }

    this.eventService.createEvent(data).subscribe({
      next: (res) => {
        this.successMessage = "Event Berhasil disimpan"
        console.log(res)
      },
      error: (err) => {
        this.errorMessage = "Gagal menyimpan"
        console.log(err);

        setTimeout(() => {
          this.errorMessage = '';
        }, 3000)
      }
    })
  }

  // formatPrice(harga: number): string{
  //   return new Intl.NumberFormat('id-ID',{
  //     style: 'currency',
  //     currency: 'IDR',
  //     minimumFractionDigits: 0
  //   }).format(harga);
  // }

  
}
