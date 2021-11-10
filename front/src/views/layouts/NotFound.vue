<template>
  <div>
    <div class="gradient text-white mt-24 flex items-center">
      <div class="container mx-auto p-4 flex flex-wrap items-center">
        <div class="w-full md:w-5/12 text-center p-4">
          <img
            src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=396&q=80"
            alt="Not Found"
          />
        </div>
        <div class="w-full md:w-7/12 text-center md:text-left p-4">
          <div class="text-6xl font-medium">404</div>
          <div class="text-xl md:text-2xl font-medium mb-4">
            Oops. Está pagina não existe.
          </div>
          <div class="text-lg mb-8">
            Você pode ter cometido um erro ou está pagina foi removida.
          </div>
          <a href="/" class="border border-white rounded p-4">IR PARA A HOME</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
