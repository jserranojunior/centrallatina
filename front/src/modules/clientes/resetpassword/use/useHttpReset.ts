import useApiConnect from "@/modules/clientes/api/use/useApiConnect";
import { AxiosResponse } from "axios";

class useHttpReset {
  async SendTokenResetEmail(email: string): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/sendemailresetpwd/" + email;
    return ApiConnect.getWithoutToken(urlApi);
  }
  async getVerifyTokenEmailReset(token: string): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/verifytokenemailreset/" + token;
    return ApiConnect.getWithoutToken(urlApi);
  }
  async setNewPassword(
    token: string,
    data: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/resetpassword/" + token;
    return ApiConnect.putWithoutToken(urlApi, data);
  }
}

export default useHttpReset;
