export class Coupon {
    code: string;
    title: string;
    subtitle: string;

    constructor(code: string, title: string, subtitle: string) {
        this.code = code;
        this.title = title;
        this.subtitle = subtitle;
    }
}