import { Layout } from 'components'

export const CadastroProdutos: React.FC = () => {
    return (
        <Layout titulo="Produtos">
            <div className='field'>
                <label className='label' htmlFor='inputSku'>SKU: *</label>
                <div className='control'>
                    <input className="input" type="text"
                        id='inputSku'
                        placeholder="Digite o SKU do produto" />
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor='inputPreco'>Preço: *</label>
                <div className='control'>
                    <input className="inputPreco" type="text"
                        id='inputPreco'
                        placeholder="Digite o SKU do produto" />
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor='inputNome'>Nome: *</label>
                <div className='control'>
                    <input className="inputNome" type="text"
                        id='inputNome'
                        placeholder="Digite o SKU do produto" />
                </div>
            </div>


            <div className='field'>
                <label className='label' htmlFor='textArea'>Descriçao: *</label>
                <div className='textArea'>
                    <textarea className="textarea"
                        id='textArea'
                        placeholder="Digite a descriçao detalhada do produto"></textarea>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor='button'>Descriçao: *</label>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Voltar</button>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
