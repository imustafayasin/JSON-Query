<template lang="pug">
.wrapper
    .editor(:ref="elem")
</template>

<script>
import * as monaco from "monaco-editor";

export default {
    name: "CodeEditor",
    props: {
        theme: String,
        value: String,
        language: String,
        elem: String
    },
    mounted() {
        window[this.elem] = monaco.editor.create(this.$refs[this.elem], {
            value: this.value,
            language: this.language,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: this.theme,
            autoIndent: true,
            formatOnPaste: true,
            formatOnType: true
        });

        window[this.elem].getModel().onDidChangeContent(_ => this.$emit("onChange"));
    },
} 
</script>