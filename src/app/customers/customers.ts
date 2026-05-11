import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  // On ajoute CommonModule pour pouvoir utiliser *ngFor et *ngIf dans le HTML
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class CustomersComponent implements OnInit {
  // Variable pour stocker la liste des clients
  customers: any;

  // Injection du service HttpClient
  private http = inject(HttpClient);

  ngOnInit(): void {
    // Appel au backend lors du chargement du composant
    this.http.get("http://localhost:8085/customers").subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        console.error("Erreur de récupération :", err);
      }
    });
  }
}
