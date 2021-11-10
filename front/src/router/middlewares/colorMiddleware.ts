import { RouteLocationNormalized } from "vue-router";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const colorMiddleware = () => {
  async function changeColor(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
  ) {
    if (to.name == "Maquininha") {
      const colorWallpaper = document.querySelectorAll(".bg-albank-2");
      colorWallpaper.forEach((item) => {
        item.classList.add("bg-albank-1");
        item.classList.remove("bg-albank-2");
      });
      next();
    } else {
      const colorWallpaper = document.querySelectorAll(".bg-albank-1");
      colorWallpaper.forEach((item) => {
        item.classList.add("bg-albank-2");
        item.classList.remove("bg-albank-1");
      });
      next();
    }
  }
  return { changeColor };
};
