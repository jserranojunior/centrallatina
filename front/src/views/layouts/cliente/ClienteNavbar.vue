<template>
  <div>
    <div id="my-modal" class="modal">
      <div class="modal-box">
        <div class="text-center align-middle mr-auto my-auto">
          <p class="pl-6 text-sm">
            <i class="far fa-clock text-central-2 ml-2"></i> SEG-SAB DAS 8:00 AS 18:00
            <i class="fas fa-map-marker-alt text-central-2 ml-2"></i> Coimbra,435-Brás
            Cep:03052-030
            <i
              class="fab fa-whatsapp text-central-2 ml-2"
            ></i> (11) 984526015
          </p>
        </div>
        <div class="modal-action">
          <a @click="closeModalInfo()" class="btn btn-sm">Fechar</a>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap bg-central-1 p-5">
      <div class="ml-auto">
        <img width="100" src="@/assets/img/logo/logo.jpg" alt />
      </div>
      <div class="text-whitetheme-1 text-center align-middle mr-auto my-auto">
        <p class="pl-6 text-sm">
          <i class="far fa-clock text-central-2 ml-2"></i> SEG-SAB DAS 8:00 AS 18:00
          <i class="fas fa-map-marker-alt text-central-2 ml-2"></i> Coimbra,435-Brás
          Cep:03052-030
          <i class="fab fa-whatsapp text-central-2 ml-2"></i> (11) 984526015
        </p>
      </div>
    </div>

    <div
      class="flex flex-wrap justify-between items-center border-gray-800 border-t border-b bg-whitetheme"
    >
      <div class="w-full mx-auto bg-white mx-2 my-1">
        <nav
          :class="
            'flex flex-wrap justify-between    mx-auto my-auto ' +
            { flex: open, hidden: !open }
          "
        >
          <a href="/" class="new-nav-btn">Home</a>
          <a href="#" class="new-nav-btn" @click="openModalInfo()">Advocacia</a>
          <a href="#" class="new-nav-btn" @click="openModalInfo()">Contabilidade</a>
          <a href="#" class="new-nav-btn" @click="openModalInfo()">Certificação Digital</a>
          <a href="#" class="new-nav-btn" @click="openModalInfo()">Bancarização</a>
          <a href="http://webmail.centrallatina.com/" class="new-nav-btn">Webmail</a>
          <router-link class="new-nav-btn" to="/cadastro">Cadastro</router-link>
          <a href="#" class="new-nav-btn" @click="openModalInfo()">Fale conosco</a>
        </nav>
      </div>

      <!-- </div> -->
      <!--  -->
    </div>
  </div>
</template>

<script lang="ts">
import { useLayouts } from "../use";
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAuth = inject("auth");

    const { closeSidebar, open } = useLayouts();

    const { Logout, auth, fields } = useAuth;

    function openModalInfo() {
      const modal: any = document.getElementById("my-modal")
      modal.classList.add("modal-open")
    }
    function closeModalInfo() {
      const modal: any = document.getElementById("my-modal")
      modal.classList.remove("modal-open")
    }

    return { Logout, auth, closeSidebar, open, fields, openModalInfo, closeModalInfo };
  },
};
</script>
