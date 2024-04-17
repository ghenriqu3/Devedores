import Input from "../Form/Input"
import { useState } from "react"

function FormProduct({handleSendProduct, isOpen, titleForm, setCloseModal }){
    
    const [accountProduct, setAccountProduct] = useState('')

    const submit = (e) => {
        handleSendProduct(accountProduct)
    }
    
    function handleOnchange(e){
        setAccountProduct({...accountProduct, [e.target.name] : e.target.value})
    }
    
    return(
        <div>
            {isOpen && 
            <div className="register-product">
                <form onSubmit={submit}>
                    <h1>{titleForm}</h1>

                    <Input 
                        name="product" 
                        text="Nome do produto" 
                        type="text" 
                        placeholder="digite o nome do produto" 
                        handleChange={handleOnchange}
                        // value={accountProduct.name}
                        value={accountProduct.product ? accountProduct.product : ''}
                    />
                    <Input 
                        name="amount" 
                        text="Quantidade" 
                        type="text" 
                        placeholder="Quantidade" 
                        handleChange={handleOnchange}
                        // value={accountProduct.name}
                        value={accountProduct.amount ? accountProduct.amount : ''}
                    />
                    <Input 
                        name="price" 
                        text="Preco" 
                        type="number" 
                        placeholder="digite o preco do produto" 
                        handleChange={handleOnchange}
                        value={accountProduct.price ? accountProduct.price : ''}
                    />
                    <div className="save-button">
                        <button onClick={setCloseModal}> Cancelar </button>
                        <button type='submit' >Anotar</button>
                    </div>
                </form>  
            </div>
            }   
        </div>
    )
   
}

export default FormProduct