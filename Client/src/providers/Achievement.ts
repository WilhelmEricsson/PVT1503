import { Coupon } from "../providers/Coupon";

export class Achievement {
    coupon: Coupon;
    progress: number;
    status: string;
    completed: boolean;

    constructor(coupon: Coupon) {
        this.coupon = coupon;
        this.progress = 0;
        this.completed = false;
        this.status = "In progress"
    }

    getProgress() {
        return this.progress;
    }

    incrementProgress() {
        this.progress++;
        if (this.progress == 10) {
            this.completed = true;
            this.status = "Completed! Tap to show coupon!"
        }
    }
}