import useApiConnect from "@/modules/admin/apiadm/use/useApiConnect";
import { AxiosResponse } from "axios";

class useHttpAuth {
  async createAtendimento(
    data: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/services";
    return ApiConnect.post(urlApi, data);
  }
    async createAreaAtendimento(
    data: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/areaservices";
    return ApiConnect.post(urlApi, data);
  }
  async updateAreaAtendimento(
    data: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/areaservices/" + data.ID;
    return ApiConnect.put(urlApi, data);
  }

  async updateAtendimento(
    data: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/services/" + data.ID;
    return ApiConnect.put(urlApi, data);
  }
  async selectAtendimentoId(id: number): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/services/" + id;
    return ApiConnect.get(urlApi);
  }
    async selectAtendimentoIdComUltimaArea(id: number): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/servicewithlastarea/" + id;
    return ApiConnect.get(urlApi);
  }
  async getAllAtendimentos(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/services";
    return ApiConnect.get(urlApi);
  }
    async getAllAtendimentosFinished(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/servicesfinished";
    return ApiConnect.get(urlApi);
  }

  
  async getAllAtendimentosPendente(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/servicespendente";
    return ApiConnect.get(urlApi);
  }

  async getAllAtendimentosType(type: string): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/servicestype/" + type;
    return ApiConnect.get(urlApi);
  }
}
export default useHttpAuth;
