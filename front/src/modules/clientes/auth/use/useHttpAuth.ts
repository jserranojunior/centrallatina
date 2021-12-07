import useApiConnect from "@/modules/clientes/api/use/useApiConnect";
import { AxiosResponse } from "axios";

class useHttpAuth {
  async login(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/login";
    return ApiConnect.postWithoutToken(urlApi, data);
  }

  async register(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/user";
    return ApiConnect.postWithoutToken(urlApi, data);
  }

  async getUser(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/user";
    return ApiConnect.get(urlApi);
  }
}

export default useHttpAuth;

// export const useHttpAuth = () => {

//   return { login };
// };
