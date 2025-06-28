
import Link from "next/link";
import { Layout } from "@/components";
import { TabelaProduto } from "@/components/tabela";
import { Produto } from "@/app/models/produtos";
import useSWR from "swr";
import { httpClient } from "@/app/http";
import { url } from "inspector";
import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { Loader } from "@/components/loader";

interface ListagemProdutosProps {
  produtos: Produto[];
}

//export default  function ListagemProdutos({produtos}: ListagemProdutosProps){
export default  function ListagemProdutos(){
    const produtos: Produto[] = [];
    const {data: result, error} = useSWR<AxiosResponse<Produto[]>>("/api/produtos", url => httpClient.get(url));
   // console.log('RESPOSTA DA API',result?.data);
   if(!result?.data){
    return (
        <div>
           <Loader show={true} />
        </div>
    )
   }
 
    return(
        <Layout titulo="Listagem de Produtos">
            <Link href={"/cadastros/produtos"}>
            <button className="button is-warning">Novo</button>
            </Link>
            
            <h1>Lista de Produtos</h1>
            <div>
               {/*<TabelaProduto produtos={produtos}/>*/}
               <TabelaProduto produtos={result?.data || [] }/>
            </div>
        </Layout>
    )
}

//export const getServerSideProps: GetServerSideProps = async () => {
//  const response: AxiosResponse<Produto[]> = await httpClient.get("/api/produtos");

  //return {
  //  props: {
 //     produtos: response.data,
  //  },
  //};
//};