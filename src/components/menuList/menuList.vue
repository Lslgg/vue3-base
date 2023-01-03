
<script setup lang='ts'>
import { MenuService } from '@/util/menu.service'
import { UseCommon } from '@/util/use.common'
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons-vue'
import { MenuSiderService } from './menu.service'
const _service = new MenuSiderService()
const { selectedKeys, openKeys } = _service.useMenuSider()
defineProps({ hideMenu: { type: Boolean, default: false } })
// 菜单列表
const menuList = MenuService.ins().menuList
const onSelect = async (name: string) => {
  UseCommon.ins().goUrlName(name)
}
</script>

<template>
  <div class="relative h-full">
    <a-menu class="menu-sider" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline"
      style="height: 100%">
      <a-menu-item key="home">
        <div @click="onSelect('/')" class="flex items-center justify-start">
          <home-outlined />
          <span>首页</span>
        </div>
      </a-menu-item>
      <!-- 遍历一级菜单项 -->
      <template v-for="item in menuList" :key="item.path">
        <!-- 没有子项 -->
        <template v-if="!item.subMenu || item.subMenu.length === 0">
          <a-menu-item :key="item.name">
            <div @click="onSelect(item.name)" class="flex items-center justify-start">
              <appstore-outlined />
              <span> {{ item.title}} </span>
            </div>
          </a-menu-item>
        </template>
        <!-- 有子项 -->
        <template v-else>
          <a-sub-menu class="menu-one" :key="item.name">
            <template #title>
              <div @click="onSelect(item.name)" class="flex items-center justify-start">
                <appstore-outlined />
                <span> {{ item.title }} </span>
              </div>
            </template>
            <!-- 遍历二级菜单项 -->
            <template v-for="subItem in item.subMenu" :key="subItem.path">
              <!-- 二级菜单项没有子项 -->
              <template v-if="!subItem.subMenu || subItem.subMenu.length === 0">
                <a-menu-item :key="subItem.name">
                  <div @click="onSelect(subItem.name)" class="flex items-center justify-start">
                    <appstore-outlined />
                    <span> {{ subItem.title }} </span>
                  </div>
                </a-menu-item>
              </template>
              <!-- 二级菜单有子项 -->
              <template v-else>
                <!-- 遍历三级菜单 -->
                <a-sub-menu class="menu-two" :key="subItem.name">
                  <template #title>
                    <div @click="onSelect(subItem.name)" class="flex items-center justify-start">
                      <appstore-outlined />
                      <span> {{ subItem.title }} </span>
                    </div>
                  </template>
                  <a-menu-item v-for="lastItem in subItem.subMenu" :key="lastItem.name">
                    <div @click="onSelect(subItem.name)" class="flex items-center justify-start">
                      <appstore-outlined />
                      <span> {{ lastItem.title }} </span>
                    </div>
                  </a-menu-item>
                </a-sub-menu>
              </template>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<style lang='less' scoped>
</style>
