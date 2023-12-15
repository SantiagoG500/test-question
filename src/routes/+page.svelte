<script>
  // import { Formater } from '../lib/functions/formater.js';
  import { completeTP } from '../lib/functions/complete-tp';
  import Question from '../lib/components/question_type_2.svelte';

  let txt = '';
  const phrase_set = new Set();
  let phrase_arr = [];

  let timer;
  let question = {};

  const debounce = () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      question = completeTP(txt);
      // console.log(question);
      // console.log(question);
      // Formater.format(txt);
    }, 750);
  };
  const addText = () => {
    phrase_set.add(txt);
    phrase_arr = Array.from(phrase_set);
  };
</script>

<main class="main-container">
  <div class="container-text" id="container-text">
    {#if question.textWithFormat}
      {@html question.textHTML}
    {:else}
      {txt}
    {/if}
    <!-- <ul>
      {#each phrase_arr as phrase}
        <li>
          {phrase}
        </li>
      {/each}
    </ul> -->
    <!-- <Question {txt_set} /> -->
  </div>

  <div class="container-insert-text">
    <!-- Question -->
    <input
      class="container-insert-text__input"
      bind:value={txt}
      type="text"
      on:keypress={debounce}
    />
    <button class="container-insert-text__finish" on:pointerdown={addText()}
      >Finish</button
    >
  </div>
</main>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(222, 222, 222);
  }

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 50vh;
    width: 80%;

    background-color: black;
    color: white;
  }

  .container-text,
  .container-insert-text {
    width: 100%;
  }
  .container-text {
    height: 90%;
  }
  .container-insert-text {
    height: 10%;
  }

  .container-insert-text,
  .container-text {
    display: flex;
    gap: 1em;
    align-items: flex-start;
  }

  .container-text {
    color: rgb(44, 43, 43);
    font-size: 1.2rem;
    padding: 1em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    background-color: rgb(221, 201, 239);
  }
  .container-insert-text {
    justify-content: center;
    align-items: center;
    background-color: rgb(123, 121, 121);
    padding: 1em 0;
  }
  .container-insert-text__finish,
  .container-insert-text__input {
    display: block;
    box-sizing: border-box;
    border: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    padding: 0.5em 1em;
  }

  .container-insert-text__finish {
    background-color: rgb(115, 179, 157);
    color: white;
  }
</style>
