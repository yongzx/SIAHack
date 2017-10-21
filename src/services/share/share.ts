import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
    
   krisFlyerMilesCollected: number;

   constructor() {
       this.krisFlyerMilesCollected = 0;
   }
 
   addMiles(miles) {
       this.krisFlyerMilesCollected = miles; 
   }
 
   getMiles() {
       return this.krisFlyerMilesCollected;
   }  
}