import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { MessageContext } from "~/components/context/messagesContext";
import { Message } from "~/components/message/message";



export default component$(() => {

    const toChild = { message: 'Lucien Siani' }
    useContextProvider(MessageContext, toChild);

    const messages = [
        'Hello This is the first message of the day',
        'The sun is raising',
        'Life is short, so enjoy it'
    ]

    const store = useStore({
        messages,
        index: 0
    })


    return (
        <div>
            <Message store={store} />
        </div>
    )


});

