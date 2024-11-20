<template>
  <div id="code-editor" ref="codeEditorRef" style="min-height: 90vh" />
  {{ value }}
  <!-- <a-button @click="fillValue">填充值</a-button> -->
</template>

<script setup lang="ts">
import { ref, watch, toRaw, onMounted, onBeforeUnmount } from 'vue';
import * as monaco from 'monaco-editor';

const codeEditorRef = ref();
let editorInstance = null;

interface Props {
  value: string;
  language: string;
  handleChange: (v: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  language: () => "c",
  handleChange: (v: string) => {
    console.log(v);
  }
});

const createEditor = () => {
  if (codeEditorRef.value) {
    requestAnimationFrame(() => {
      console.log("Creating editor with language:", props.language);
      editorInstance = monaco.editor.create(codeEditorRef.value, {
        value: props.value,
        language: props.language,
        automaticLayout: true,
        colorDecorators: true,
        minimap: {
          enabled: true,
        },
        readOnly: false,
        theme: "vs-dark",
      });

      // 注册内容变化监听
      if (editorInstance) {
        editorInstance.onDidChangeModelContent(() => {
          console.log("目前内容为：", editorInstance.getValue());
          props.handleChange(toRaw(editorInstance.getValue()));
        });
      }
    });
  }
};

const destroyEditor = () => {
  if (editorInstance) {
    editorInstance.dispose();
    editorInstance = null;
  }
};

watch(
    () => props.language,
    () => {
      destroyEditor();
      createEditor();
    }
);

onMounted(() => {
  createEditor();
});

onBeforeUnmount(() => {
  destroyEditor();
});
</script>

<style scoped>
</style>
