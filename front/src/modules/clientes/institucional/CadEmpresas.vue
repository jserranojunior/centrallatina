<template>
  <div>
    <nav
      class="h-10 font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-2 px-4 sm:items-baseline w-full shadow-md border-b no-print border-gray-400 text-whitetheme-1 bg-whitetheme-3 dark:bg-darktheme-10 dark:text-darktheme-1"
    ></nav>
    <div
      class="flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100"
    >
      <!-- sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12  -->
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
            <div class="text-whitetheme-3 font-bold flex flex-wrap">
              <div class="w-1/2 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs" for="nome"
                  >Nome Completo</label
                >

                <SInputT value="" placeholder="Digite o nome"></SInputT>
              </div>
              <div class="w-1/2 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs" for="nome"
                  >Qual Associação participa ou pretende participar?</label
                >

                <SInputT value=""></SInputT>
              </div>
            </div>
            <div class="text-whitetheme-3 font-bold flex flex-wrap">
              <div class="w-1/2 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs" for="nome"
                  >Qual país nasceu?</label
                >

                <SInputT value=""></SInputT>
              </div>
              <div class="w-1/2 px-1">
                <label class="label-tail text-gray-500 m-0 text-xs" for="nome"
                  >RG / Carnê ID / RNE / RNM</label
                >

                <SInputT value="" placeholder="00.000.000-00"></SInputT>
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
