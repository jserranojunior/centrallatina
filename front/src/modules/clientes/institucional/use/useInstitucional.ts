import { toRefs, reactive } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useInstitucional = () => {
  const state = reactive({
    // logo: import("@/assets/imgs/union-bank-logo.png"),
    bgImagem: "",
    mobile: false,
    linkWhatsApp: "https://web.whatsapp.com/send?phone=5511998068930",
  });

  async function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (
      userAgent.search(
        /(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i
      ) != -1
    ) {
      state.linkWhatsApp = "whatsapp://send?phone=5511998068930";
    } else {
      state.linkWhatsApp = "https://web.whatsapp.com/send?phone=5511998068930";
    }
  }

  return { ...toRefs(state), isMobile };
};
