<template>
  <div>
    <div>
      <div v-if="modals && modals[nome] && modals[nome].show">
        <div
          :class="
            'overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center ' +
            modal
          "
        >
          <div :class="'flex w-auto my-auto mx-auto max-w-6xl justify-center' + m">
            <div
              :class="
                'flex flex-col justify-center border-0 rounded-lg shadow-lg bg-gray-600 outline-none focus:outline-none w-full' +
                w
              "
            >
              <div
                :class="
                  'flex justify-between border-b border-solid border-gray-300 rounded-t ' +
                  headerClass
                "
              >
                <div>
                  <h3 class="font-semibold">
                    <slot name="header"></slot>
                  </h3>
                </div>
                <div>
                  <div
                    class="cursor-pointer"
                    @click="updateModal({ name: nome, show: false })"
                  >
                    <i
                      class="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"
                    ></i>
                  </div>
                </div>
              </div>
              <div :class="'relative flex-auto ' + bodyClass">
                <slot name="body"></slot>
              </div>

              <div class="flex p-2 border-t border-solid border-gray-300 rounded-b">
                <slot name="footer"></slot>
                <!-- <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style="transition: all .15s ease"
                    v-on:click="togleShowModal(nome)"
                  >Close</button>
                  <button
                    class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style="transition: all .15s ease"
                    v-on:click="togleShowModal(nome)"
                  >Save Changes</button>-->
              </div>
            </div>
          </div>
        </div>
        <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from "@vue/runtime-core";
import { inject } from "vue";

export default {
  name: "Modal",
  props: {
    nome: {
      required: true,
      type: String,
    },
    w: {
      required: false,
      default: "p-16",
      type: String,
    },
    m: {
      required: false,
      default: "",
      type: String,
    },
    modal: {
      required: false,
      default: "flex items-center",
      type: String,
    },
    headerClass: {
      required: false,
      default: "px-5 py-2",
      type: String,
    },
    bodyClass: {
      required: false,
      default: "p-4",
      type: String,
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props) {
    const useModal = inject("modal");
    const { dataModal, addModal, modals, updateModal } = useModal;
    onBeforeMount(() => {
      const dadosModal = { name: props.nome, show: false };
      addModal(dadosModal);
    });
    return { dataModal, modals, updateModal };
  },
};
</script>
