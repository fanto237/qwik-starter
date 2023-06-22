import { createContextId } from "@builder.io/qwik";



export const MessageContext = createContextId<{ message: string }>("de.fanto.message")

// export const QwikCityContext = createContextId<string>(namestring): ContextId<string>;