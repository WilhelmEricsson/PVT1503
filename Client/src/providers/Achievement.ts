import { Coupon } from "../providers/Coupon";

export class Achievement {
    coupon: Coupon;
    progress: number;

    constructor(coupon: Coupon) {
        this.coupon = coupon;
        this.progress = 0;
    }

    getProgrss() {
        return this.progress;
    }

    incrementProgress() {
        this.progress++;
    }
}