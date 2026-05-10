import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers'; // Ajoute le chemin complet
import { AccountsComponent } from './accounts/accounts';   // Idem ici

export const routes: Routes = [
  { path: "customers", component: CustomersComponent },
  { path: "accounts", component: AccountsComponent },
];
