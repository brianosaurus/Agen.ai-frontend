<script lang="ts" module>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let inputValue = '';
  let showPlaceholder = true;

  function handleSubmit(event) {
    event.preventDefault();
    inputValue = inputValue.trim();

    if (inputValue !== '') {
      dispatch('submit', inputValue);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  function handleInput(event) {
    inputValue = event.target.value;
    if (inputValue.length === 0){
      showPlaceholder = true;
    } else {
      showPlaceholder = false;
    }
  }
</script>

<style>
  .input-box {
    position: relative;
    display: inline-block;
  }

  .input-field {
    width: 700px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #999; /* Add border style */
    background-color: white;
    color: #333;
    border-radius: 4px;
    outline: none; /* Remove the default outline */
  }

  .input-placeholder {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #999;
    pointer-events: none;
    transition: opacity 0.2s;
    opacity: var(--input-value-empty, 1);
  }
</style>

<div class="input-box">
  <form on:submit={handleSubmit}>
    <input
      type="text"
      class="input-field"
      bind:value={inputValue}
      on:keydown={handleKeyDown}
      on:input={handleInput}  
      autocomplete="off"
      style="--input-value-empty: ${inputValue ? 0 : 1};"
    />
  </form>
  {#if showPlaceholder}
    <div class="input-placeholder">prompt</div>
  {/if}
</div>
