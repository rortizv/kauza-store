import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export const ErrorResponseInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) =>
  next(req).pipe(catchError(handleErrorResponse));

function handleErrorResponse(error: HttpErrorResponse): ReturnType<typeof throwError> {
  const errorResponse = `Error code: ${error.status}\nMessage: ${error.message}\nURL: ${error.url}`;
  return throwError(()=> errorResponse);
}
