import { http } from "../service/Api";

export const Post = (info) => {
  return  http.post("colaboradores", {
      ...info,
    });
  };

  export const Get = () => {
    return http.get("/colaboradores")
  }

  export const GetId = (id) => {
    return http.get(`/colaboradores/${id}`)
    
  }

export const Delete = (id, colaboradores) => {
   return  http.delete(`/colaboradores/${id}`, { data: colaboradores })
  };