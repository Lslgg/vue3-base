
<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { useVModel } from '@vueuse/core'
import Codemirror from '../codemirror/codemirror.vue'
import { ref } from 'vue'
import 'tinymce/themes/silver'
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/link' // 列表插件
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/help'
import 'tinymce/plugins/table'

const props = defineProps({
  selector: { type: String, required: true },
  content: { type: String },
  height: Number,
})
const emit = defineEmits(['update:content'])
const myContent = useVModel(props, 'content', emit)
const sourceContent = ref('')
const visible = ref(false)
const codeVisible = ref(false)

const init = (() => {
  const getToolPlugs = () => {
    const plugins = `
        link lists image wordcount media
        table fullscreen preview pagebreak insertdatetime
      `
    const toolbar = []
    toolbar.push('dialog-advcode fullscreen preview')
    toolbar.push('|')
    toolbar.push('link unlink dialog-material-btn media')
    toolbar.push('|')
    toolbar.push('bold italic underline strikethrough')
    toolbar.push('|')
    toolbar.push('forecolor backcolor lineHeight')
    toolbar.push('|')
    toolbar.push('fontsize')
    toolbar.push('|')
    toolbar.push('alignleft aligncenter alignright alignjustify')
    toolbar.push('|')
    toolbar.push('removeformat')
    toolbar.push('|')
    toolbar.push('undo redo')
    toolbar.push('|')
    toolbar.push('insertdatetime table')
    toolbar.push('|')
    toolbar.push('hr pagebreak')
    return { plugins, toolbar }
  }
  return {
    selector: `#${props.selector}`,
    language_url: '/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    height: props.height ?? 300,
    menubar: false,
    setup: (editor: any) => {
      editor.ui.registry.addButton('dialog-material-btn', {
        icon: 'image',
        tooltip: '选择素材',
        onAction: () => visible.value = true,
      })
      editor.ui.registry.addButton('dialog-advcode', {
        icon: 'sourcecode',
        tooltip: '源代码',
        onAction: () => {
          codeVisible.value = true
          sourceContent.value = myContent.value ?? ''
        }
      })
    },
    plugins: getToolPlugs().plugins, // 插件
    toolbar: getToolPlugs().toolbar.join(''), // 工具条
  }
})()
const onCodemirror = () => {
  codeVisible.value = false
  myContent.value = sourceContent.value
}
</script>
<template>
  <div>
    <editor :id="selector" v-model="myContent" :init="init"></editor>
    <a-modal v-model:visible="codeVisible" title="源码" width="100%" wrap-class-name="full-modal" @ok="onCodemirror">
      <Codemirror v-model:code="sourceContent" mode="htmlmixed" height="100%"></Codemirror>
    </a-modal>
  </div>

</template>
<style lang="css">
.tox-dialog-wrap__backdrop {
  display: none;
}
</style>
