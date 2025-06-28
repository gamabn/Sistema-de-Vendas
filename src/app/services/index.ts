import { httpClient } from "../http";
import { Produto } from "../models/produtos";
import { AxiosResponse } from "axios";

const resorceURL: string = "/api/produtos";

export const useProdutoService = () => {
    const salvar = async(produto: Produto):Promise<Produto> => {
        const response: AxiosResponse<Produto> = await httpClient.post(resorceURL, produto);
       // return response.data;
       console.log('Resposta da Api',response.data);
       return response.data;          
    }
   const atualizar = async(produto: Produto):Promise<void> => {
        const url: string = `${resorceURL}/${produto.id}`;
        await httpClient.put(url, produto);
       
    }
    return {
        salvar, atualizar
    
    
    }
  

}