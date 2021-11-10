/* eslint-disable @typescript-eslint/ban-types */
import { useAuthAdm } from "@/modules/admin/authadm/use/useAuthAdm";
import { RouteLocationNormalized } from "vue-router";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const adminAuthMiddleware = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  async function authadmin(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: Function
  ) {
    return useAuthAdm()
      .isLoggedAdm()
      .then((res) => {
        if (to.name !== "LoginAdm" && res) {
          next();
        } else if (to.name !== "LoginAdm" && !res) {
          return next({ name: "LoginAdm" });
        } else if (to.name === "LoginAdm" && res) {
          return next({ name: "Admin" });
        } else if (to.name === "LoginAdm" && !res) {
          next();
        }
      });
  }

  return { authadmin };
};
