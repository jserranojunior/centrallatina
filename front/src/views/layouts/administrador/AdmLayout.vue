<template>
  <div class="dark:bg-gray-900 dark:text-gray-100">
    <nav
      v-if="$slots.header"
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-0 px-4 bg-gray-700 text-white sm:items-baseline w-full dark:bg-gray-800 dark:text-gray-100 shadow-md border-b border-gray-600 dark:border-gray-700 no-print"
    >
      <slot name="header"></slot>
    </nav>
    <div
      class="flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100"
    >
      <div
        v-if="$slots.sidebar"
        class="sidebar w-64 z-10 absolute md:static text-dark p-1 dark:bg-gray-700 dark:text-gray-100 no-print bg-gray-700 border-r-2 border-gray-600"
      >
        <div class="flex flex-wrap items-center p-1 text-sm">
          <slot name="sidebar"></slot>
        </div>
      </div>
      <!-- sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12  -->
      <div
        class="w-full z-0 p-1 absolute md:static bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-100"
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
