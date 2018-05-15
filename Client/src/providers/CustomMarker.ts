export class CustomMarker {
    lat: number;
    lng: number;
    info: string;

    constructor (lat: number, lng: number, info: string) {
        this.lat = lat;
        this.lng = lng;
        this.info = info;
    }

    getLat() {
        return this.lat;
    }

    getLng() {
        return this.lng;
    }
}