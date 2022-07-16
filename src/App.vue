<template lang="pug">
.grid
  .g-col-6
    h4(class="ms-2 my-2") Input(JSON)
    CodeEditor(elem="editor_input" :value="default_values.input" @onChange="handleQuery" theme="vs" language="json") 
  .g-col-6
    h4(class="ms-2 my-2") Query
    CodeEditor(elem="editor_query" :value="default_values.query" @onChange="handleQuery" theme="vs" language="javascript")

  .g-col-6
    h4(class="ms-2 my-2") Output
    CodeEditor(elem="editor_output" :value="default_values.output"  theme="vs-dark" language="json")
  .g-col-6
    h4(class="ms-2 my-2 p-2") Select Theme
    .settings.py-2.px-4
      .form-check.form-check-inline
        input#inlineRadio1.form-check-input(type='radio' name='inlineRadioOptions' @input="setTheme('vs')" value='option1')
        label.form-check-label(for='inlineRadio1') Light
      .form-check.form-check-inline
        input#inlineRadio2.form-check-input(type='radio' @input="setTheme('vs-dark')" name='inlineRadioOptions' checked value='option2')
        label.form-check-label(for='inlineRadio2') Dark
      .form-check.form-check-inline
        input#inlineRadio3.form-check-input(type='radio' @input="setTheme('hc-black')" name='inlineRadioOptions' value='option3')
        label.form-check-label(for='inlineRadio3') High contrast



   
</template>

<script>
import CodeEditor from "@/components/CodeEditor";

export default {
  name: "App",
  components: {
    CodeEditor,
  },
  data() {
    return {
      settings: {
        darkMode: true
      },
      default_values: {
        input: JSON.stringify({ "message": "Add your json code" }, null, 2),
        query: "// You can use input variable like : input.map(item => item.price), input.message etc. \ninput",
        output: '"Your changes will be displayed here"'
      }
    }
  },
  methods: {
    setTheme(theme) {
      window.editor_output._themeService.setTheme(theme);
    },
    handleQuery() {
      try {
        var input = JSON.parse(window.editor_input.getValue());
        window.editor_output.setValue(JSON.stringify(eval(window.editor_query.getValue())))
      }
      catch (err) {
        window.editor_output.setValue(err.toString())
      }

    }
  }
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

  @media(max-width:920px) {
    grid-template-columns: 1fr
  }


  .g-col-6 {
    .editor {
      width: 100%;

      min-height: 40vh;

      .monaco-editor {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
}
</style>
