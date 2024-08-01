import { Layout } from 'components'
import React,{useState} from 'react'
import Input from '../../Input/'

export const CadastroProdutos: React.FC = () => {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [sku, setSku] = useState('')
    const [descricao, setDescricao] = useState('')

    function handleForm(){
       const valor = parseFloat(preco)
    const produto: FormProps = {
    nome: nome,
    preco: valor,
    sku:sku,
     descricao: descricao
    }
    alert(preco)
    console.log(produto)
    }
       
interface FormProps{
    nome: string;
    sku: string;
    preco: number;
    descricao: string
}

    return (

        <Layout titulo="Produtos">

              <div className="columns">
                  <Input 
               
                  label='Sku' 
                  value={sku}

                  Change={setSku}
                  />
                  
              <div/>

                    <div className='field is-half column'>
                         <label className='label' htmlFor='inputPreco'>Preço: *</label>
                         <div className='control'>
                          <input className="input" type="number"
                            id='inputPreco'
                             value={preco}
                            placeholder="Digite o SKU do produto"
                            onChange={event=> setPreco(event.target.value)} />
                        </div>
                  </div>
              </div>

            <div className="columns">
                 <div className='field column is-full'>
                        <label className='label' htmlFor='inputNome'>Nome: *</label>
                   <div className='control'>
                       <input className="input" type="text"
                             id='inputNome'
                             value={nome}
                            onChange={(text)=> setNome(text.target.value)}
                             placeholder="Digite o SKU do produto" />
                    </div>
                </div>
            </div>

                <div className="columns">
                 <div className='field column is-full'>
                     <label className='label' htmlFor='textArea'>Descriçao: *</label>
                       <div className='textArea'>
                             <textarea className="textarea"
                               id='textArea'
                              placeholder="Digite a descriçao detalhada do produto"
                              onChange={(text=> setDescricao(text.target.value))}></textarea>
                         </div>
                     </div>
                 </div>

            <div className='field'>
                <label className='label' htmlFor='button'>Descriçao: *</label>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" type='submit' onClick={handleForm}>Salvar</button>
                    </div>
                    <div className="control">
                        <button className="button  is-info">Voltar</button>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
