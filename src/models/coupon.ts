export interface Coupon {
    id: number;
    name: string;
    percent: number;
    isActive: boolean;
    createDate: Date;
    updateDate: Date;
}