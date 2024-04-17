import './formModal.css'
import Input from '../Form/Input'
import { useState } from 'react'


function FormModal({isOpen, modalTitleText, handleSubmit, setCloseModal }){

    const [accountData, setAccountData] = useState({})

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(accountData)
    }

    function handleOnchange(e){
        setAccountData({...accountData, [e.target.name] : e.target.value})
    }

    function handleDateChange(e) {
        const dateValue = e.target.value;
        const formattedDate = new Date(dateValue).toISOString().split('T')[0];
        setAccountData({ ...accountData, [e.target.name]: formattedDate });
    }


    return(

        <div>
            {isOpen && 
                <div className="form-register-user">
                    <form onSubmit={submit}>
                        <h1>{modalTitleText}</h1>

                            <Input name="nome" 
                            text="Seu nome" 
                            type="text" 
                            placeholder="Digite seu nome" 
                            handleChange={handleOnchange}
                            value={accountData.name}
                            />

                            <Input name="cpf" 
                            text="CPF" 
                            placeholder="Digite seu CPF" 
                            type="text" 
                            handleChange={handleOnchange} 
                            value={accountData.cpf}
                            />

                            <Input name="data" 
                            text="Data de criação da conta" 
                            placeholder="Digite a data de criação da conta" 
                            type="date" 
                            handleChange={handleDateChange} 
                            value={accountData.date}
                            />
                            <div className='save-button'> 
                                <button type='submit' onClick={setCloseModal} >Cancelar</button>
                                <button type='submit' >Salvar</button>
                            </div>
                    </form>
                </div>
            }
        </div>
    )
   
}

export default FormModal