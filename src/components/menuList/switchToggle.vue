
<script setup lang='ts'>
import { RightOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { useVModel } from '@vueuse/core'
const props = defineProps({ hideMenu: Boolean })
const emit = defineEmits(['onToggleMenu', 'update:hideMenu'])
const myHideMenu = useVModel(props, 'hideMenu', emit)
const onToggle = () => {
  myHideMenu.value = !myHideMenu.value
  emit('onToggleMenu', myHideMenu)
}
</script>

<template>
  <div @click="onToggle" class="absolute -right-0 top-1/2 -translate-y-[50%]">
    <div class="border cursor-pointer h-10
        flex justify-center items-center left_outlined__item
        text-gray-800 border-white bg-white translate-x-[100%]
        dark:text-white dark:border-[#2E2E2E] dark:bg-[#2E2E2E]">
      <left-outlined v-if="hideMenu" />
      <right-outlined v-else />
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
