import './buttonPopup.css'
import { useState } from 'react'
import FormModal from '../FormModal'

function PopupButton({btnText}){
    const [openModal, setOpenModal] = useState(false)

    function handlePopup(){
        setOpenModal(true)
    }

    const CreateAccount = async (client) => {
    try {
        client.price = 0;
        client.account = [];
        const response = await fetch('http://localhost:5001/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client),
        });
        const data = await response.json();
        setOpenModal(false);
    } catch (error) {
        console.error(error);
    }
    };
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