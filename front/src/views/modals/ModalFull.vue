<template>
  <div class="print">
    <div>
      <div v-if="data">
        <div v-if="data.show">
          <div
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex items-center justify-center"
          >
            <div :class="m + ' flex w-auto my-6 mx-auto max-w-6xl justify-center'">
              <div
                :class="w + ' flex flex-col justify-center border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none'"
              >
                <div
                  class="flex items-start justify-center p-5 border-b border-solid border-gray-300 rounded-t"
                >
                  <h3 class="font-semibold">
                    <slot name="header"></slot>
                  </h3>
                  <!-- <button
                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                v-on:click="toggleModal()"
              >
                <span
                  class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                >×</span>
                  </button>-->
                </div>
                <div class="relative p-6 flex-auto">
                  <slot name="body"></slot>
                </div>

                <div
                  class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"
                >
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Modal",
  data() {
    return {
      data: null
    };
  },

  methods: {
    ...mapActions(["addModal", "togleShowModal"])
  },
  mounted() {
    const dadosModal = { nome: this.nome, show: false };
    this.addModal(dadosModal).then(res => {
      this.data = res;
    });
  },

  computed: {
    ...mapState({
      modals: state => state.Modal.models
    })
  },

  props: {
    nome: {
      required: true,
      default: ""
    },
    w: {
      required: true,
      default: ""
    },
    m: {
      required: true,
      default: ""
    }
  },
  watch: {
    models: {
      handler: function() {
        this.data = this.modals;
      },
      deep: true
    }
  }
};
</script>
