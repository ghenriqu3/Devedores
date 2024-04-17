import './allCliente.css'
import ClientList from '../ClientList'
import PopupButton from '../popupButton'
import { useState, useEffect } from 'react'

function AllClient(){

    
    const [clients, setClient] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5001/clients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setClient(data)
        })
    }, [] )


    function removeAccount(id){
        fetch(`http://localhost:5001/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((resp) => resp.json())
        .then(() =>{
            setClient(clients.filter((client) => client.id !== id))
            // console.log('cliente removido com sucesso')
        })
        .catch(err => console.log(err))
    }


    return(
    <div className='main-content'>
        <div className='content-client'>
            <h1>TODOS OS CLIENTES</h1>
            <div>
                <PopupButton btnText="Nova conta +" />
            </div>
        </div>
        <div>
            {clients.map((client) => (
            <ClientList 
                name={client.nome} 
                date={client.data} 
                key={client.id} 
                id={client.id}  
                handleRemove={removeAccount}
            />
            ))}
            {clients.length === 0 && (<p>desculpe, não ha nada aqui</p>) }
        </div>
    </div>
    )
}

export default AllClient