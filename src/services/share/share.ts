import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    krisFlyerMilesCollected: number;
    preferences: object;
    price: string;

    constructor() {
        this.krisFlyerMilesCollected = 0;
        this.preferences = {};
        this.price = "";
    }

    addMiles(miles) {
        this.krisFlyerMilesCollected = miles;
    }

    setPreferences(pref){
        this.preferences = pref;
        var chosenPref = Object.keys(pref);
        for (let chosen of chosenPref){
            if(pref[chosen]){
                this.preferences[chosen] = pref[chosen];
            }
            if(!pref[chosen]){
                delete this.preferences[chosen];
            }
        }
        console.log(this.preferences);
    }

    getMiles() {
        return this.krisFlyerMilesCollected;
    }

    getPreferences(){
        return this.preferences;
    }

    setPrice(price){
        this.price = price; 
    }

    getPrice(){
        return this.price;
    }


}