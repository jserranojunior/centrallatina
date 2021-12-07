<template>
  <div>
    <nav
      class="h-10 font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-1 px-4 sm:items-baseline w-full shadow-md border-b no-print border-gray-400 text-whitetheme-1 bg-whitetheme-3 dark:bg-darktheme-10 dark:text-darktheme-1"
    ></nav>
    <div
      class="flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100"
    >
      <!-- sm:w-8/12 lg:w-10/12 lg:w-11/12 xl:w-11/12  -->
      <div
        class="w-full z-0 p-1 absolute md:static text-whitetheme-9 bg-whitetheme-2 dark:bg-darktheme-7 dark:text-darktheme-1 md:px-52"
      >
        <SCard>
          <template #header>
            <span class="text-whitetheme-3 font-bold text-sm"> CADASTRO</span>
          </template>
          <template #body>
            <div class="text-whitetheme-3 font-bold flex text-center justify-center">
              <SBtn
                value="<i class='fas fa-plus-circle mx-1'></i> NOVO CADASTRO"
                class="bg-whitetheme-3 hover:bg-blue-900 w-1/4 mr-1 text-xs"
              ></SBtn>
              <SBtn
                value="<i class='far fa-file-excel mx-1'> EXPORTAR PARA EXCEL"
                class="bg-whitetheme-4 hover:bg-gray-700 w-1/4 mr-1 text-xs"
              ></SBtn>
            </div>
          </template>
        </SCard>

        <SCard class="mt-4">
          <template #header>
            <span class="text-whitetheme-3 font-bold text-sm">FICHA DE CADASTRO</span>
          </template>
          <template #body>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-1">
              <div class="w-full lg:w-1/2 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Nome Completo</label>

                <SInputT value="" placeholder="Digite o nome"></SInputT>
              </div>
              <div class="w-full lg:w-1/2 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Qual Associação participa ou pretende participar?</label
                >

                <SInputT value=""></SInputT>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-2">
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Qual país nasceu?</label
                >

                <SInputT value=""></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >RG / Carnê ID / RNE / RNM</label
                >

                <SInputT value="" placeholder="00.000.000-00"></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Data de expedição</label
                >

                <SInputT value="" placeholder="00/00/0000"></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Data de Validade</label
                >

                <SInputT value="" placeholder="00/00/0000"></SInputT>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-1">
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">CPF</label>

                <SInputT value="" placeholder="000.000.000-00"></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Data de nascimento</label
                >

                <SInputT value="" placeholder="00/00/0000"></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Estado Civil</label>

                <SInputT value="" placeholder=""></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Qual sua atividade de trabalho?</label
                >

                <SInputT value="" placeholder=""></SInputT>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-1">
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">CEP</label>
                <SInputT value="" placeholder="00000-000"></SInputT>
              </div>
              <div class="w-full lg:w-2/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Logradouro (AV/Rua)</label
                >

                <SInputT value="" placeholder=""></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Número</label>

                <SInputN value="" placeholder=""></SInputN>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-1">
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Bairro</label>

                <SInputT value="" placeholder=""></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Estado</label>

                <SInputT value="" placeholder=""></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Cidade</label>

                <SInputT value="" placeholder=""></SInputT>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">Complemento</label>

                <SInputT value="" placeholder=""></SInputT>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-1">
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >O imóvel onde mora é:</label
                >

                <SInputT value="" placeholder=""></SInputT>
              </div>
              <div class="w-full lg:w-2/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Renda Mensal, incluindo familiares que moram juntos</label
                >

                <select class="form text-gray-800 cursor-pointer">
                  <option value="" class="text-black">
                    De R$ 1.000,00 a R$ 2.000,00
                  </option>
                  <option value="" class="text-black">
                    De R$ 2.000,00 a R$ 5.000,00
                  </option>
                  <option value="" class="text-black">
                    De R$ 5.000,00 a R$ 15.000,00
                  </option>
                  <option value="" class="text-black">Acima de R$ 15.000,00</option>
                </select>
              </div>
              <div class="w-full lg:w-1/4 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Possui filhos? Quantos?</label
                >

                <SInputN value="" placeholder=""></SInputN>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap py-1">
              <div class="w-full lg:w-1/3 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs">E-mail</label>

                <SInputT value="" placeholder="exemplo@exemplo.com.br"></SInputT>
              </div>
              <div class="w-full lg:w-1/3 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Telefone para contato 1</label
                >

                <SInputT value="" placeholder="(xx) 00000-0000"></SInputT>
              </div>
              <div class="w-full lg:w-1/3 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs"
                  >Telefone para contato 2</label
                >

                <SInputN value="" placeholder=""></SInputN>
              </div>
            </div>
            <div
              class="flex flex-wrap mt-6 text-xs border-t border-gray-200 py-4 items-center"
            >
              <div class="w-full lg:w-3/4">
                <p>
                  Possui familiar (Filhos, sobrinhos ou outros) que nasceram no Brasil e
                  que hoje estão acima de 16 anos de idade?
                </p>
              </div>
              <div class="w-full lg:w-1/4 justify-end text-right">
                <input class="ml-auto mr-2" type="radio" /> Sim, possuo
                <input class="mx-2" type="radio" /> Não, não possuo
              </div>
            </div>
            <div
              class="flex flex-wrap text-xs border-t border-gray-200 py-2 items-center"
            >
              <div class="w-full lg:w-2/4">
                <p>
                  Tem CNPJ MEI - Microempreendedor individual ou outras modalidade de
                  empresa?
                </p>
              </div>
              <div class="w-full lg:w-1/4 text-center">
                <input class="ml-auto mr-2" type="radio" /> Sim
                <input class="mx-2" type="radio" /> Não
              </div>
              <div class="w-full lg:w-1/4">
                <SInputT value="" placeholder="00.0000.000/0001-00"></SInputT>
              </div>
            </div>
            <div
              class="flex flex-wrap text-xs border-t border-gray-200 py-2 items-center"
            >
              <div class="w-full lg:w-1/4">
                <p>Já declarou importo de renda?</p>
              </div>
              <div class="w-full lg:w-1/4 text-center pt-1">
                <input class="ml-auto mr-2" type="radio" /> Sim
                <input class="mx-2" type="radio" /> Não
              </div>
              <div class="w-full lg:w-2/4">
                <SInputT
                  value=""
                  placeholder="Qual o número do recibo do imposto de Renda?"
                ></SInputT>
              </div>
            </div>
            <div
              class="flex flex-wrap text-xs border-t border-gray-200 py-4 items-center"
            >
              <div class="w-full lg:w-1/2">
                <p>Recebe bolsa familia ou outro beneficio do governo Brasileiro</p>
              </div>
              <div class="w-full lg:w-1/2 text-center md:text-right pt-1">
                <input class="ml-auto mr-2" type="radio" /> Sim
                <input class="mx-2" type="radio" /> Não
              </div>
            </div>
            <div
              class="flex flex-wrap text-xs border-t border-gray-200 py-4 items-center"
            >
              <div class="w-full lg:w-1/2">
                <p>Gostaria de participar de cursos e palestras sobre diversos temas</p>
              </div>
              <div class="w-full lg:w-1/2 text-center md:text-right pt-1">
                <input class="ml-auto mr-2" type="radio" /> Sim
                <input class="mx-2" type="radio" /> Não
              </div>
            </div>
            <div
              class="flex flex-wrap text-xs border-t border-gray-200 py-2 items-center"
            >
              <div class="w-full lg:w-1/2">
                <p>
                  Gostaria de deixar algum comentário sobre alguma necessidade que tenha?
                </p>
              </div>
              <div class="w-full lg:w-1/2 text-right">
                <SInputT value="" placeholder=""></SInputT>
              </div>
            </div>
            <div class="flex flex-wrap justify-end my-6">
              <div class="w-full lg:w-1/7 p-1">
                <SBtn value="Salvar"></SBtn>
              </div>

              <div class="w-full lg:w-1/7 p-1">
                <SBtn color="red" value="Limpar"></SBtn>
              </div>
            </div>
          </template>
        </SCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
