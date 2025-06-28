import { Produto } from "@/app/models/produtos"

interface ProdutoRowProps {
    produto: Produto;
}
interface ProdutosProps {
    produtos: Produto[];
}

export const TabelaProduto:React.FC<ProdutosProps> = ({produtos}: ProdutosProps) => {
    return(
        <table className="table is-striped is-fullwidth is-hoverable">
            <thead>
              <tr>
                  <th>Codigo</th>
                  <th>SKU</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th></th>
                  </tr>
          </thead>
          <tbody>
          {produtos.map(produto => <ProdutoRow key={produto.id} produto={produto}/>)}
          </tbody>
         
        </table>
    )
}

const ProdutoRow: React.FC<ProdutoRowProps> = (props: ProdutoRowProps) =>{
    return(
      <tr>
        <td>{props.produto.id}</td>
        <td>{props.produto.sku}</td>
        <td>{props.produto.nome}</td>
        <td>{props.produto.preco}</td>
        <td>{props.produto.quantidade}</td>
        <td>
           <button className="button is-success">Editar</button>
          
        </td>
        <td>
           <button className="button is-danger">Excluir </button>
        </td>
       
      </tr>
    )

}