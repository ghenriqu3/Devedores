import './singleClient.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FormProduct from '../../Components/FormProduct'
import Product from '../../Components/Product'
import { v4 as uuidv4 } from 'uuid';
import PayBar from '../../Components/PayBar'

export default function SingleClient({btnText}){
    const { id } = useParams()
    const [accounts, setAccount] = useState([])
    const [openModal, setOpenModal] = useState(false)


    function handlePopupAccount(){
        setOpenModal(true)
    }


    function addProducts(newProduct) {
        newProduct.id = uuidv4()
        const updatedAccount = {
            ...accounts,
            account: [...accounts.account, newProduct],
        };

        fetch(`http://localhost:5001/clients/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAccount),
        })
        .then(resp => resp.json())
        .then((data) =>{
            setAccount(data)
        }).catch(err => console.log(err))            
    }   

    // function addProducts(newProduct){
    //     newProduct.id = uuidv4()
    //     accounts.push(newProduct)
    //     const updatedAccounts = accounts;

    //         fetch(`http://localhost:5001/clients/${accounts.id}`,{
    //             method: 'PATCH',
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             },
  

    useEffect(() => {
        fetch(`http://localhost:5001/clients/${id}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) =>{
            setAccount(data)
        }).catch(err => console.log(err))
    }, [id])

    // const clientID = accounts.id
    

    function removeProduct(productId) {

        setAccount((prevAccounts) =>({
            ...prevAccounts,
            account: prevAccounts.account.filter((product) => product.id !== productId),
        }))
        
        fetch(`http://localhost:5001/accounts/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accounts)
        }).then(resp => resp.json())
        .then((data) => (
            setAccount(data)
        )).catch(err => console.log(err))
    }



    return(
        <div>
            {/* {console.log(accounts)} */}
            <div className='main-content'>
                <div className='content-client'>
                    <div className='data'>
                        <p>Conta feita em: </p>
                        <span>{accounts.data}</span>
                    </div>
                    <h1>{accounts.nome}</h1>
                    <div>
                        <button  className="popupButton" onClick={handlePopupAccount}>{btnText}</button>
                    </div>
                </div>
                <div>
                    <FormProduct isOpen={openModal} titleForm='Adicione o novo produto' handleSendProduct={addProducts} setCloseModal={() => setOpenModal(!openModal)}/>
                </div>
               
                    <Product products={accounts.account} handleremoveProduct={removeProduct} />
                    
                    {/* <p>total da conta: {payTotal().toFixed(2)}</p> */}
                    <PayBar  accounts={accounts} />
                    {/* se nao tiver nada anotado exibir mensagem */}
                </div>
        </div>
    )
}


//deploy services
//amazon s3
//app runner
//google
//microsoft service


//heroku
//netlify
//render
//cyclic.sh

