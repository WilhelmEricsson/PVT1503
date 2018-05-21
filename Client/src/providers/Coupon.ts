export class Coupon {
    code: string;
    title: string;
    subtitle: string;

    constructor(code: string) {
        this.code = code;
        this.title = "Coupon!";
        this.subtitle = "You got a coupon at Kungafamiljen. Show this code to the guards: ";
    }
}