// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyCjDrHWHPaocp7dEqfqEybcEYSIdo1c8us',
    authDomain: 'testproject4webapp.firebaseapp.com',
    databaseURL: 'https://testproject4webapp.firebaseio.com',
    projectId: 'testproject4webapp',
    storageBucket: 'testproject4webapp.appspot.com',
    messagingSenderId: '413821172169',
    appId: '1:413821172169:web:8945a9c0c83544823ed018',
    measurementId: 'G-JMVCVGHN1Y'
  }
};
