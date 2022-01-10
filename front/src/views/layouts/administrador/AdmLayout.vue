<template>
  <div class="dark:bg-gray-900 dark:text-gray-100">
    <nav
      v-if="$slots.header"
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-2 px-4 sm:items-baseline w-full shadow-md border-b no-print border-gray-600 text-whitetheme-1 bg-whitetheme-2 dark:bg-darktheme-10 dark:text-darktheme-1"
    >
      <slot name="header"></slot>
    </nav>
    <div class="flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100">
      <div
        v-if="$slots.sidebar"
        class="sidebar w-64 z-10 absolute md:static py-1 no-print text-whitetheme-9 bg-whitetheme-1 dark:bg-darktheme-8 dark:text-darktheme-1 border-r border-gray-200"
      >
        <div class="flex flex-wrap items-center p-1 text-sm">
          <slot name="sidebar"></slot>
        </div>
      </div>
      <!-- sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12  -->
      <div
        class="w-full z-0 p-1 absolute md:static text-whitetheme-9 bg-white dark:bg-darktheme-7 dark:text-darktheme-1"
        @click="closeSidebarBodyClick()"
      >
        <slot name="mainpage"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable vue/script-setup-uses-vars //

export default {
  components: {},

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {};
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    closeSidebar() {
      if (document.querySelector(".sidebar")) {
        const sidebar = document.querySelector(".sidebar");
        const storageSidebar = localStorage.getItem("sidebar");

        if (storageSidebar === "sidebar-open" && sidebar) {
          localStorage.sidebar = "sidebar-close";
          sidebar.classList.remove("sidebar-open");
          sidebar.classList.add("sidebar-close");
        }
      }
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    closeSidebarBodyClick() {
      if (document.querySelector(".sidebar")) {
        const storageSidebar = localStorage.getItem("sidebar");
        if (window.screen.width < 768 && storageSidebar === "sidebar-open") {
          this.closeSidebar();
        }
      }
    },
  },
};
</script>
