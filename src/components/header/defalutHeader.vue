<script setup lang='ts'>
import SwitchTheme from '@/components/switchTheme/switchTheme.vue'
</script>

<template>
  <a-layout-header class="leading-none border-b dark:border-b-black">
    <div class="flex justify-between items-center h-full">
      <div class="flex justify-start items-center space-x-2">
        <a-image :width="30" src="/images/logo/zbirds.svg" :preview="false" />
        <span class="flex flex-col space-y-1">
          <span class="font-bold">云</span>
          <span> cloud</span>
        </span>
      </div>
      <div class="flex justify-start space-x-4 text-xl">
      </div>
      <div class="flex justify-start items-center space-x-4">
        <SwitchTheme></SwitchTheme>
      </div>
    </div>
  </a-layout-header>
</template>

<style lang='less'>
</style>
