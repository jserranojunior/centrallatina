<template>
  <div class="my-2">
    <div class="flex flex-wrap justify-center pt-4">
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
        <SCard>
          <template #header>
            <span class="text-black font-bold"> Editando </span></template
          >
          <template #body>
            <div class="mt-2">
              <input
                v-model="updateInputs.name"
                class="form-tail mt-1"
                placeholder="Nome Completo"
              />

              <input
                v-model="updateInputs.cellphone"
                v-maska="'(##) #####-####'"
                class="form-tail mt-2"
                placeholder="Telefone/Whatsapp ( ) 00000-0000"
              />
              <input
                v-model="updateInputs.dtBirth"
                v-maska="'##/##/####'"
                type="text"
                class="form-tail mt-2"
                placeholder="Data de nascimento    /  /"
              />
              <input
                v-model="updateInputs.cpf"
                v-maska="'###.###.###-##'"
                type="text"
                class="form-tail mt-2"
                placeholder="CPF"
              />
              <input
                v-model="updateInputs.rg"
                v-maska="'##.###.###-#'"
                type="text"
                class="form-tail mt-2"
                placeholder="RG"
              />

              <input
                v-model="updateInputs.email"
                type="email"
                class="form-tail mt-2"
                placeholder="E-mail"
              />
              <input
                v-model="updateInputs.cep"
                type="text"
                class="form-tail mt-2"
                placeholder="CEP"
              />
              <input
                v-model="updateInputs.logradouro"
                type="text"
                class="form-tail mt-2"
                placeholder="Logradouro"
              />
              <input
                v-model="updateInputs.numero"
                type="number"
                class="form-tail mt-2"
                placeholder="Nº"
              />
              <input
                v-model="updateInputs.bairro"
                type="text"
                class="form-tail mt-2"
                placeholder="Bairro"
              />
              <input
                v-model="updateInputs.estado"
                type="text"
                class="form-tail mt-2"
                placeholder="Estado"
              />

              <input
                v-model="updateInputs.cnpj"
                v-maska="'##.###.###/####-##'"
                type="text"
                class="form-tail mt-2"
                placeholder="CNPJ"
              />
              <input
                v-model="updateInputs.profissao"
                type="text"
                class="form-tail mt-2"
                placeholder="Profissão"
              />
              <input
                v-model="updateInputs.nreciboirpf"
                type="number"
                class="form-tail mt-2"
                placeholder="N.Recibo IRPF"
              />
              <input
                v-model="updateInputs.ie"
                type="text"
                class="form-tail mt-2"
                placeholder="Inscrição Estadual"
              />
              <input
                v-model="updateInputs.im"
                type="text"
                class="form-tail mt-2"
                placeholder="Inscrição Municipal"
              />
              <input
                v-model="updateInputs.senhacertificadodigital"
                type="text"
                class="form-tail mt-2"
                placeholder="Senha Certificado Digital"
              />
              <input
                v-model="updateInputs.contaoutrobanco"
                type="text"
                class="form-tail mt-2"
                placeholder="Conta em outro banco"
              />
              <div class="flex">
                <div class="w-full md:w-1/2 px-1">
                  <router-link :to="{ name: 'Users' }">
                    <div class="btn-warning-tail mt-4">Voltar</div>
                  </router-link>
                </div>
                <div class="w-full md:w-1/2 px-1">
                  <div
                    class="btn-primary-tail mt-4"
                    @click="updateUser(updateInputs, updateInputs.dtBirth)"
                  >
                    Salvar
                  </div>
                </div>
              </div>
            </div>
          </template>
        </SCard>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAuth = inject("users");
    const { updateInputs, updateUser } = useAuth;
    return { updateInputs, updateUser };
  },
};
</script>
