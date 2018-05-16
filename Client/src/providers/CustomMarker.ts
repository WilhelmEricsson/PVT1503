export class CustomMarker {
    lat: number;
    lng: number;
    visited: boolean;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
        this.visited = false;
    }

    toggleVisited() {
       this.visited = !this.visited;
    }

    getLat() {
        return this.lat;
    }

    getLng() {
        return this.lng;
    }
}