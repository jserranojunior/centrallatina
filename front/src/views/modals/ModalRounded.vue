<template>
  <div>
    <div v-show="data && data.show">
      <div
        :class="
          'overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center ' +
          modal
        "
      >
        <div :class="'flex w-auto my-auto mx-auto max-w-6xl justify-center' + m">
          <div
            :class="
              'flex flex-col justify-center border-0 rounded-3xl shadow-lg bg-white outline-none focus:outline-none w-full' +
              w
            "
          >
            <div
              :class="
                'flex justify-between border-b border-solid border-gray-300 text-center rounded-t ' +
                headerClass
              "
            >
              <!-- <div>
                <h3 class="font-semibold">
                  <slot name="header"></slot>
                </h3>
              </div> -->
              <div class="w-full">
                <div v-on:click="togleShowModal(nome)" class="cursor-pointer">
                  <i
                    class="fa fa-times-circle text-gray-500 hover:text-gray-600 transition duration-150 text-2xl"
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
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Modal",
  data() {
    return {
      data: null,
    };
  },

  methods: {
    ...mapActions(["addModal", "togleShowModal"]),
  },
  mounted() {
    const dadosModal = { nome: this.nome, show: false };
    this.addModal(dadosModal).then((res) => {
      this.data = res;
    });
  },

  computed: {
    ...mapState({
      modals: (state) => state.Modal.models,
    }),
  },

  props: {
    nome: {
      required: true,
    },
    w: {
      required: false,
      default: "p-16",
    },
    m: {
      required: false,
      default: "",
    },
    modal: {
      required: false,
      default: "flex items-center",
    },
    headerClass: {
      required: false,
      default: "px-5 py-2",
    },
    bodyClass: {
      required: false,
      default: "p-4",
    },
  },
  watch: {
    models: {
      handler: function () {
        this.data = this.modals;
      },
      deep: true,
    },
  },
};
</script>
