<template lang="pug">
.grid
  .g-col-6
    h4(class="ms-2 my-2") Input
    CodeEditor(elem="editorinput" theme="vs-light" language="json") 
  .g-col-6
    h4(class="ms-2 my-2") Query
    CodeEditor(elem="editor_query" language="javascript")

  .g-col-6
    h4(class="ms-2 my-2") Output
    CodeEditor(elem="editor_output")
  .g-col-6
    h4(class="ms-2 my-2") Setting
    .settings.p-3 setting
   
</template>

<script>
import CodeEditor from "@/components/CodeEditor";
export default {
  name: "App",
  components: {
    CodeEditor,
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
