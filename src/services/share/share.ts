import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    krisFlyerMilesCollected: number;
    preferences: object;

    constructor() {
        this.krisFlyerMilesCollected = 0;
        this.preferences = {};
    }

    addMiles(miles) {
        this.krisFlyerMilesCollected = miles;
    }

    setPreferences(pref){
        this.preferences = pref;
    }

    getMiles() {
        return this.krisFlyerMilesCollected;
    }

    getPreferences(){
        return this.preferences;
    }
}