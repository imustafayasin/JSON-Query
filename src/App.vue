<template lang="pug">
.grid
  .g-col-6
    h4(class="ms-2 my-2") Input
    .editor(ref="input" data-placeholder="\n //Add Json Here :)")
  .g-col-6
    h4(class="ms-2 my-2") Query
    .editor(ref="query" data-placeholder="//You can use your json as input \ninput")

  .g-col-6
    h4(class="ms-2 my-2") Output
    .editor(ref="output" )
  .g-col-6
    h4(class="ms-2 my-2") Setting
    .settings.p-3 setting
</template>

<script>
import * as monaco from "monaco-editor";

export default {
  name: "App",
  mounted() {
    console.log(Object.entries(this.$refs));
    for (let editor_element of Object.values(this.$refs)) {
      monaco.editor.create(editor_element, {
        value: `${editor_element.dataset.placeholder}`,
        language: "javascript",
        lineNumbers: "on",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: "vs-dark",
      });
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  width: 100%;
  padding: 10px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  .g-col-6 {
    .editor {
      width: 100%;
      min-height: 350px;

      .monaco-editor {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
}
</style>
