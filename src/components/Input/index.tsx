 import {InputHTMLAttributes, ChangeEvent} from 'react'
 import { formatReal } from '@/app/util/money'

 interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    id: string ;
    Change?: (value:string) => void;
    label: string;
    value: string;
    colunClass?: string;
    disabled?: boolean;
    currency?: boolean;
    error?: string;
    
    
}

export default function Input({Change, value, label, colunClass, id, disabled, currency, error}:InputProps) {
    const onInputChange = (event: ChangeEvent<HTMLInputElement>)=>{
         let value = event.target.value;

                        if(value && currency){
                            value = formatReal(value)
                        }
                        if(Change){
                            Change(value)
                        }
    }
    return (

        <div className={ `field column ${colunClass} `}>
            <label className='label' htmlFor={id}>{label}</label>
            <div className='control'>
                <input className="input" type="text"
                    id={id} 
                    value={value}
                    disabled={disabled}
                    onChange={ onInputChange }
                   />
                   {error &&  <p className="help is-danger">{error}</p>}
            </div>
        </div>



    )
}