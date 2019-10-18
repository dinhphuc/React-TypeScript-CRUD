import Response from "../models/response";
import axios from "axios";


export default class BaseService {
    private static baseURL: string = "http://localhost:4000";


    public static async getAll<T>(url: string): Promise<Response> {
        let res = await axios.get<Array<T>>(this.baseURL + url)
            .then(response => {
                return new Response(true, response.data as Array<T>, "Thành công", "");
            })
            .catch(function (error) {
                return new Response(false, null, "Lỗi", error);
            });
        return res;
    }

    public static get<T>(url: string, param: any): Promise<Response> {
        let res = axios.get<T>(this.baseURL + url + param)
            .then(response => {
                return new Response(true, response.data, "Thành công", "");
            })
            .catch(function (error) {
                return new Response(false, null, "Lỗi", error);
            });
        return res;
    }
    public static delete(url: string, param: any): Promise<Response> {
        let res = axios.post(this.baseURL + url + param)
            .then(response => {

                return new Response(true, null, "Thành công", "");
            })
            .catch(function (error) {
                return new Response(false, null, "Lỗi", error);
            });
        return res;
    }
    public static create<T>(url: string, obj: T): Promise<Response> {

        let res = axios.post(this.baseURL + url ,obj)
            .then(response => {
                return new Response(true, null, "Thành công", "");
            })
            .catch(function (error) {
                return new Response(false, null, "Lỗi", error);
            });
        return res;
    }
    public static update<T>(url: string, param: any, obj: T): Promise<Response> {

        let res = axios.post(this.baseURL + url + param, obj)
            .then(response => {
                return new Response(true, null, "Thành công", "");
            })
            .catch(function (error) {
                return new Response(false, null, "Lỗi", error);;
            });
        return res;
    }
}