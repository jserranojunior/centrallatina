/* eslint-disable @typescript-eslint/ban-types */
import { useAuth } from "../../modules/clientes/auth/use/useAuth";
import { RouteLocationNormalized } from "vue-router";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthMiddleware = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  async function auth(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: Function
  ) {
    return useAuth()
      .isLogged()
      .then((res) => {
        if (to.name !== "Login" && res) {
          next();
        } else if (to.name !== "Login" && !res) {
          return next({ name: "Login" });
        } else if (to.name === "Login" && res) {
          return next({ name: "Home" });
        } else if (to.name === "Login" && !res) {
          next();
        }
      });
  }

  async function admin(
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: Function
  ) {
    return useAuth()
      .isLogged()
      .then(async (log) => {
        if (log) {
          return await useAuth()
            .getUserID()
            .then(async (id) => {
              if (id) {
                await useAuth()
                  .isAdmin()
                  .then((res) => {
                    if (res) {
                      return next();
                    } else {
                      return next({ name: "Home" });
                    }
                  });
              }
            });
        }
      });
  }

  return { auth, admin };
};
