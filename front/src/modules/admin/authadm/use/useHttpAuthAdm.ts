import useApiConnect from "@/modules/admin/apiadm/use/useApiConnect";
import { AxiosResponse } from "axios";

class useHttpAuth {
  async loginadm(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/login";
    return ApiConnect.postWithoutToken(urlApi, data);
  }

  async register(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/register";
    return ApiConnect.postWithoutToken(urlApi, data);
  }

  async getAdmin(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin";
    return ApiConnect.get(urlApi);
  }
}

export default useHttpAuth;

// export const useHttpAuth = () => {

//   return { login };
// };
