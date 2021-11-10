<template>
  <div>
    <div class="flex flex-wrap bg-central-1 p-5">
      <div class="ml-auto">
        <img width="100" src="@/assets/img/logo/logo.jpg" alt="" />
      </div>
      <div class="text-white text-center align-middle mr-auto my-auto">
        <p class="pl-6 text-sm">
          <i class="far fa-clock text-central-2 ml-2"></i> SEG-SAB DAS 8:00 AS 18:00
          <i class="fas fa-map-marker-alt text-central-2 ml-2"></i> Coimbra,435-Brás
          Cep:03052-030 <i class="fab fa-whatsapp text-central-2 ml-2"></i> (11) 984526015
        </p>
      </div>
    </div>

    <div
      class="flex flex-wrap justify-between items-center mx-2 my-1 border-gray-800 border-t border-b"
    >
      <div class="w-full mx-auto bg-white">
        <nav
          :class="
            'flex flex-wrap justify-between    mx-auto my-auto ' +
            { flex: open, hidden: !open }
          "
        >
          <a href="#" class="new-nav-btn"> Albank </a>
          <a href="#" class="new-nav-btn"> Contabilidade </a>
          <a href="#" class="new-nav-btn"> Advocacia </a>
          <a href="#" class="new-nav-btn"> Engenharia </a>
          <a href="#" class="new-nav-btn"> Certificado Digital </a>
          <a href="#" class="new-nav-btn"> Cooperativa </a>
          <a href="#" class="new-nav-btn"> Rádio/TV </a>
          <a href="#" class="new-nav-btn"> Despachante </a>
          <a href="#" class="new-nav-btn"> Corporativa </a>
          <a href="#" class="new-nav-btn"> Projetos </a>
          <a href="#" class="new-nav-btn"> Fale com o Gestor </a>
        </nav>
      </div>

      <!-- </div> -->
      <!--  -->
    </div>
  </div>
</template>

<script>
import { useLayouts } from "../use";
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAuth = inject("auth");

    const { closeSidebar, open } = useLayouts();

    const { Logout, auth, fields } = useAuth;

    return { Logout, auth, closeSidebar, open, fields };
  },
};
</script>
