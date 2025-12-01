import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [CommonModule, RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {

}
