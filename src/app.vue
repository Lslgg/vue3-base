<script setup lang="ts">
import { computed, } from 'vue'
import { useRoute } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
const locale = zhCN
const route = useRoute()
const layout = computed(() => {
  const layoutName = route.meta.layout ?? 'blank'
  return `layout-${(layoutName as string).toLowerCase()}`
})
console.log(layout)
const urlName = computed(() => route.name)
</script>
<template>
  <a-config-provider :locale="locale">
    <component :is="layout" :class="urlName">
      <router-view />
    </component>
  </a-config-provider>
</template>
<style lang="css" scoped>
</style>
