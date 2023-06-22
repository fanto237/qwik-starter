import { component$, $, useStore } from "@builder.io/qwik";
import type { Coupon } from "../../models/coupon";


interface CouponsStore {
    coupons: Coupon[];
}

const endPoint = 'https://localhost:44347/api/v1/coupons';

export default component$(() => {

    const store = useStore<CouponsStore>({
        coupons: []
    });

    const onLoadCoupons = $(async () => {
        const response = await getCoupons();
        store.coupons = response.data;
    })

    return (
        <div>

            {
                store.coupons.map((coupon) => (
                    <h3 key={coupon.id}>{coupon.name}</h3>
                ))
            }
            <button onClick$={onLoadCoupons}>Load Coupons</button>
        </div>
    )
})

export async function getCoupons() {
    const response = await fetch(endPoint, { method: 'GET', mode: 'cors' });
    return response.json();
}