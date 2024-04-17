import './buttonPopup.css'
import { useState } from 'react'
import FormModal from '../FormModal'

function PopupButton({btnText}){
    const [openModal, setOpenModal] = useState(false)

    function handlePopup(){
        setOpenModal(true)
    }

    function CreateAccount(client){
        client.price = 0
        client.account = []
        // e.preventDefault()
        fetch('http://localhost:5001/clients', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(client),
        }).then((resp) => resp.json())
          .then((data) => {
            // const state = {message: 'Conta criada com sucesso'}
            // console.log(data, state)
            setOpenModal(false)
        })
        .catch(err => console.log(err))
    } 
    return(
        <div>
            <div>
                <button  className="popupButton" onClick={handlePopup}>{btnText}</button>
            </div>
            <div>
                <FormModal isOpen={openModal} modalTitleText='Cadastrar nova conta' setCloseModal={() =>setOpenModal(!openModal) } handleSubmit={CreateAccount} />
            </div>
        </div>
    )
}

export default PopupButton