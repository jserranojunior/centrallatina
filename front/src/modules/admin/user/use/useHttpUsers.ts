import useApiConnect from "@/modules/admin/apiadm/use/useApiConnect";
import { AxiosResponse } from "axios";

class useHttpAuth {
  async getUserId(id: number): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/users/" + id;
    return ApiConnect.get(urlApi);
  }
  async updateUserId(
    data: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/users/" + data.ID;
    return ApiConnect.put(urlApi, data);
  }
  async getAllUsers(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/users";
    return ApiConnect.get(urlApi);
  }
}
export default useHttpAuth;
