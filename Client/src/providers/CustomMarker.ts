export class CustomMarker {
    id:number
    lat: number;
    lng: number;
    visited: boolean;

    constructor(id:number, lat: number, lng: number) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.visited = false;
    }

    public toggleVisited() {
       this.visited = !this.visited;
    }

    
}
