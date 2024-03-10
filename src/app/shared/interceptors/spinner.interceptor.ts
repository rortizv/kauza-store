import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { SpinnerService } from "@shared/services/spinner.service";
import { finalize } from "rxjs";

export const SpinnerInterceptor: HttpInterceptorFn = (req: any, next: any) => {
  const spinnerService = inject(SpinnerService);
  spinnerService.show();
  return next(req).pipe(
    finalize(() => spinnerService.hide())
  )
}
