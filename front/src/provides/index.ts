import { provide } from "vue";
import { useAuth } from "@/modules/clientes/auth/use/useAuth";
import { useResetPassword } from "@/modules/clientes/resetpassword/use/useResetPassword";

import { useUsers } from "@/modules/admin/user/use/useUsers";

import { useInstitucional } from "@/modules/clientes/institucional/use/useInstitucional";
// import { useFinancial } from "@/modules/financeiro/use/useFinancial";
import useApiConnect from "@/modules/clientes/api/use/useApiConnect";
import { useAuthAdm } from "@/modules/admin/authadm/use/useAuthAdm";

const ApiConnect = new useApiConnect();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Provides = () => {
  // provide("financial", useFinancial());
  provide("auth", useAuth());
  provide("authadm", useAuthAdm());

  provide("apiconnect", ApiConnect);
  provide("institucional", useInstitucional());
  provide("users", useUsers());
  provide("resetpassword", useResetPassword());
};
