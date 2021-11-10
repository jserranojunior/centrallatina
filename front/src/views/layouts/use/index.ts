import { reactive, toRefs } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLayouts = () => {
  const state = reactive({
    closeSidebar,
    open: false,
  });
  function closeSidebar() {
    const sidebar:HTMLElement | null = document.getElementById("sidebar");
    if(sidebar){
    sidebar.classList.toggle("hidden");
    }else{
      console.log("notion")
    }
  }
  return toRefs(state);
};
