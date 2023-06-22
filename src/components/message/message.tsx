import { component$, useContext } from "@builder.io/qwik";
import { MessageContext } from "../context/messagesContext";


interface MessageStore {
    messages: string[],
    index: number
}

interface MessageProps {
    store: MessageStore
}


export const Message = component$((props: MessageProps) => {

    const { messages, index } = props.store;
    const toChild = useContext(MessageContext);


    console.log(toChild.message);
    return (
        <>
            <h1>{messages[index]}</h1>
            <h1>{toChild.message}</h1>
            <button onClick$={() => props.store.index++}>Next</button>
        </>
    );
})