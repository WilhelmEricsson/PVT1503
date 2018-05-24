export class CustomMarker {
    id:number
    lat: number;
    lng: number;
    numOfUsersPresent: number;

    constructor(id:number, lat: number, lng: number, numOfUsersPresent:number) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.numOfUsersPresent = numOfUsersPresent;
    }
}
