// appointments.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Appointment {
  time: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  ngOnInit() {
    // Aqui você pode buscar os dados de agendamentos via API
    this.appointments = [
      {
        time: '08:10 - 09:00',
        title: 'Corte, Barba',
        description: 'Gabriel Torres',
      },
      {
        time: '09:10 - 09:40',
        title: 'Corte',
        description: 'Natacha Torres',
      },
      {
        time: '09:50 - 10:10',
        title: 'Barba',
        description: 'Lucas Givando',
      },
      {
        time: '10:20 - 11:30',
        title: 'Corte, Barba, Sobrancelha',
        description: 'Davi Rodrigues',
      },
      {
        time: '11:40 - 12:00',
        title: 'Sobrancelha',
        description: 'Isaque Araújo',
      },
      {
        time: '12:10 - 12:50',
        title: 'Barba, Sobrancelha',
        description: 'Renan Felipe',
      },
    ];
  }
}
