import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { CommonModule } from '@angular/common';
import { eventInterface } from '../event/event-model';
import { Event } from '@angular/router';
import { Util } from '../utils/util';


@Component({
  selector: 'app-detail-event',
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-event.html',
  styleUrl: './detail-event.css',
})
export class DetailEvent implements OnInit{
  event: eventInterface | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private eventService: EventService){}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.loadEventDetail(id);
      })
  }

  loadEventDetail(id: string){
    this.isLoading = true;
    this.errorMessage = '';

    this.eventService.detailEvent(id).subscribe({
      next: (data) => {
        // Convert string date
        data.tanggalEvent = new Date(data.tanggalEvent)
        this.event = data;
        this.isLoading = false;
        console.log('Detail Event dimuat: ', data);
      },error: (err) => {
        this.errorMessage = 'Detail Budaya tidak ditemukkan';
        this.isLoading = false;
        console.error(err)
      }
    })
  }

  formatPrice(harga: number) {
    return Util.formatPrice(harga);
  }

  formatDate(tanggal: Date){
    return Util.formatDate(tanggal);
  }


}
