
<script setup lang='ts'>
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
import { ref } from 'vue'
const checked = ref(false)
const theme = window.localStorage.getItem('theme')
if (theme) toggleTheme({ scopeName: theme })
else toggleTheme({ scopeName: 'light' })
const change = (value: boolean) => {
  if (value) {
    toggleTheme({ scopeName: 'dark' })
    window.localStorage.setItem('theme', 'dark')
  } else {
    toggleTheme({ scopeName: 'light' })
    window.localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <a-switch v-model:checked="checked" checked-children="暗黑" un-checked-children="高亮" @change="change" />
</template>

<style lang='less' scoped>
</style>
