<script>
import WordCounter from "../model/application/WordCounter.ts";
import {VowelStartFilter} from "../model/domain/filter/concrete-filter/VowelStartFilter.ts";
import {TextVal} from "../model/domain/TextVal.ts";

export default {
  data: () => {
    return {
      text: "",
      result: 0
    }
  },
  methods: {
    filterText() {
      const counter = new WordCounter()
      this.result = counter.count(new TextVal(this.text), new VowelStartFilter())

    }
  }
}
</script>

<template>
  <header>
    <h1>Word Counter</h1>
    <h2>Open your Javascript console</h2>
  </header>

  <label for="text-to-filter">Write the text to filter:</label>
  <textarea name="text-to-filter" id="text-to-filter" cols="30" rows="10" v-model="text"></textarea>
  <button v-on:click="filterText">Filter TextVal</button>
  <p>Result: {{ result }}</p>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>