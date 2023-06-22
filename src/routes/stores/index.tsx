import { component$, $, useStore } from "@builder.io/qwik";



export default component$(() => {

    const messages = [
        'Hello This is the first message of the day',
        'The sun is raising',
        'Life is short, so enjoy it'
    ]

    const store = useStore({
        index: 0,
    });

    const nextMessage = $(
        () => {
            store.index++;
        }
    )

    console.log(store.index)


    return (
        <div class='text-center'>

            <h1 class='text-center text-2xl m-4'>QWIK STORES MANAGEMENT</h1>

            <h3 class="text-center">{messages[store.index]}</h3>

            <button class='rounded border-2 bg-red-500 p-2 m-4' onClick$={() => nextMessage()}>Show Next Message</button>
        </div>
    )
})