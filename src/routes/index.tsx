import { component$, $ } from '@builder.io/qwik';
import { HelloWorld } from '~/components/hello-world/hello-world';



export default component$(() => {
  console.log("initializing from the server");

  const runClick = $(
    () => {
      alert('clicked')
    }
  );

  const messages = [
    'Hello ',
    'The sun is raising',
    'Life is short, so enjoy it'
  ]

  const onShowMessageDefined = $((message: string) => alert(message));

  return (
    <>
      {
        messages.map((item, index) =>
          <HelloWorld key={index} message={item} showButton={true} name='Siani' onShowMessage={onShowMessageDefined} />
        )
      }
      <button class="border-4 border-blue-500 bg-red-500 px-4 py-2 rounded-md focus:border-green-500" onMouseMove$={() => console.log('mouse moved')} onclick$={runClick}>Hello</button>
    </>
  );
});

