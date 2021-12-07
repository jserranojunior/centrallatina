<template>
  <SliferLayout>
    <template #header>
      <Navbar></Navbar>
    </template>
    <template #mainpage>
      <div class="bg-central-2">
        <slot name="cliente"></slot>
      </div>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </SliferLayout>
</template>
<script>
import SliferLayout from "./ClienteLayout.vue";
import Footer from "./ClienteFooter.vue";
import Navbar from "./ClienteNavbar.vue";

export default {
  name: "Cliente",
  components: {
    SliferLayout,
    Footer,
    Navbar,
  },
};
</script>
