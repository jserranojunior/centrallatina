<template>
  <SliferLayout>
    <template #header>
      <div class="w-full">
        <div class="flex justify-between">
          <div>
            <span class="text-whitetheme-1">
              <STogglesidebar class="text-whitetheme-1 align-middle"></STogglesidebar
            ></span>
          </div>
          <div><i class="far fa-bell text-whitetheme-1 align-middle"></i></div>
        </div>
      </div>
    </template>
    <template #sidebar>
      <Sidebar></Sidebar>
    </template>
    <template #mainpage>
      <div class="bg-whtie-800 min-h-screen p-1">
        <slot name="body"></slot>
      </div>
    </template>
  </SliferLayout>
</template>
<script>
import SliferLayout from "./AdmLayout.vue";
import Sidebar from "./AdmSidebar.vue";

export default {
  name: "Cliente",
  components: {
    SliferLayout,
    Sidebar,
  },
};
</script>
