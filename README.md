# KauzaStore

This is an e-commerce built with last features of Angular 17.

This project implements the last features of Angular 17:
- Signals
- Interceptor signal
- RxJs operators to manipulate data and async.

How to run
1. Clone repo: ```git clone https://github.com/rortizv/kauza-store.git```
2. Use node v18 or higher
3. Run ```npm i```
4. Run ```ng serve -o``` to run the project and open in browser when ready
5. Run the Stripe-server to accept payment:
   a. Open a terminal in ```stripe-server folder```
   b. Run ```npm i```
   c. To run the Stripe NodeJS server ```npm start```
   d. It should show ```Running on port 4242```
   e. In your Angular application, go to src/environments/environment.ts, the environment object should look like this:
     ```
     export const environment = {
        apiURL: 'https://fakestoreapi.com',
        stripeAPIKey: 'YOUR_STRIPE_API_KEY',
        stripeServerURL: 'http://localhost:4242'
      };```





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
