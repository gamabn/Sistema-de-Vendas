
export default function Input({Change,value, label}) {
    
    return (

        <div className='field is-half column'>
            <label className='label' htmlFor='inputSku'>{label}</label>
            <div className='control'>
                <input className="input" type="text"
                    id='inputSku'
                    value={value}
                    onChange={(event=>{change})}
                    placeholder="Digite o SKU do produto" />
            </div>
        </div>



    )
}