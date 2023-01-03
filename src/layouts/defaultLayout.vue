<script setup lang="ts">
import { ref } from 'vue'
import DefaultHeader from '@/components/header/defalutHeader.vue'
import MenuList from '@/components/menuList/menuList.vue'
import SwitchToggle from '@/components/menuList/switchToggle.vue'
// 栏目显示隐藏
const hideMenu = ref(true)
const width = ref(200)
const onToggleMenu = () => width.value = !hideMenu.value ? 0 : 200
</script>

<template>
  <a-layout class="h-screen">
    <DefaultHeader></DefaultHeader>
    <a-layout>
      <a-layout-sider class="relative" :width="width">
        <div class="flex-1 overflow-x-hidden overflow-y-auto">
          <MenuList :hideMenu="hideMenu"></MenuList>
        </div>
        <SwitchToggle @onToggleMenu="onToggleMenu" v-model:hideMenu="hideMenu"></SwitchToggle>
      </a-layout-sider>
      <a-layout class="p-4">
        <a-layout-content class="overflow-hidden w-[100%] flex justify-center">
          <Suspense>
            <template #default>
              <router-view />
            </template>
            <template #fallback>
              <h1>Loading...</h1>
            </template>
          </Suspense>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="css" scoped>
:deep(.ant-layout-sider-children) {
  display: flex;
  justify-content: flex-start;
}

:deep(.ant-layout-content) {
  margin: auto;
}
</style>
