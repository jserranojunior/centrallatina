import axios, { AxiosResponse, AxiosInstance, AxiosStatic } from "axios";

export interface ClassUseApiConnect {
  get: (endpoint: string) => Promise<void | AxiosResponse>;
  post: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
  put: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
  patch: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
  delet: (endpoint: string) => Promise<void | AxiosResponse>;
  postimage: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
  getWithoutToken: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
  postWithoutToken: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
  putWithoutToken: (
    endpoint: string,
    body: Record<string, unknown>
  ) => Promise<void | AxiosResponse>;
}

class useApiConnect {
  public token: string | null | undefined;
  public axiosImage: AxiosInstance;
  public axiosWithoutToken: AxiosInstance;
  public axiosInstance: AxiosInstance;
  public backApiUrl: string;
  public axios: AxiosStatic;

  // token: string | null | undefined, axiosImage: AxiosInstance, axiosWithoutToken: AxiosInstance, backApiUrl: string
  constructor() {
    this.token = localStorage.getItem("token");
    this.backApiUrl = `${process.env.VUE_APP_BACK_API_URL}`;
    console.log(this.backApiUrl);
    this.axios = axios;
    this.axiosImage = this.axios.create({
      baseURL: this.backApiUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

    this.axiosWithoutToken = this.axios.create({
      baseURL: this.backApiUrl,
    });

    this.axiosInstance = this.axios.create({
      baseURL: this.backApiUrl,
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint: string): Promise<void | AxiosResponse> {
    return this.axiosInstance.get(endpoint);
  }

  async post(
    endpoint: string,
    body: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    return this.axiosInstance.post(endpoint, body);
  }

  async put(
    endpoint: string,
    body: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    return this.axiosInstance.put(endpoint, body);
  }
  async patch(
    endpoint: string,
    body: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    return this.axiosInstance.patch(endpoint, body);
  }

  async delet(endpoint: string): Promise<void | AxiosResponse> {
    return this.axiosInstance.delete(endpoint);
  }

  async postimage(
    endpoint: string,
    body: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    return this.axiosImage.post(endpoint, body);
  }

  async getWithoutToken(endpoint: string): Promise<void | AxiosResponse> {
    return this.axiosWithoutToken.get(endpoint);
  }

  async postWithoutToken(
    endpoint: string,
    body: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    return this.axiosWithoutToken.post(endpoint, body);
  }

  async putWithoutToken(
    endpoint: string,
    body: Record<string, unknown>
  ): Promise<void | AxiosResponse> {
    return this.axiosWithoutToken.put(endpoint, body);
  }
}
export default useApiConnect;
