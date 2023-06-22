import { component$, PropFunction } from "@builder.io/qwik";

interface HelloWorldProps {
    message: string;
    name?: string; // mark as optional
    onShowMessage: PropFunction<(message: string) => void>;
    showButton: boolean;
}

export const HelloWorld = component$((props: HelloWorldProps) => {
    // const message: string = props.message;
    // const name: string = props.name;
    const { message, name, onShowMessage, showButton } = props;


    return (
        <div class='flex row justify-items-center items-center'>
            <h1 class="text-4xl text-center m-4">Hello World</h1>
            <p class="text-red-500 text-2xl text-center">{message} to {name}!</p>
            {
                showButton && (<>
                    <button class='rounded bg-red-500 p-2 m-4 focus:bg-black focus:text-red-500 hover:bg-black hover:text-red-500' onClick$={() => onShowMessage(message)}>Show Message</button>
                </>
                )
            }
        </div>
    );
});