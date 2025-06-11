import { inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of, debounceTime, switchMap } from 'rxjs';

export function emailExistsValidator(): AsyncValidatorFn {
  const http = inject(HttpClient);
  return (control: AbstractControl) => {
    if (!control.value) {
      return of(null);
    }

    return of(control.value).pipe(
      debounceTime(500),
      switchMap(email =>
        http.get<{ exists: boolean }>(`http://localhost:5000/api/auth/checkmail?email=${email}`).pipe(
          map(response => (response.exists ? { emailTaken: true } : null)),
          catchError(() => of(null))
        )
      )
    );
  };
}
