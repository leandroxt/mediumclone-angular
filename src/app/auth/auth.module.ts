import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { reducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
