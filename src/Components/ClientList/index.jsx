import './ClientList.css'
import { Link } from 'react-router-dom'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function ClientList({id, name, date, handleRemove}){


    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(

        <div className="client-list">
            <p>{name}</p>
            <div className='action-clients'>
                <Link className="link" to={`/single-client/${id}`}>Ver conta</Link>
                <button onClick={remove}><DeleteRoundedIcon /></button>
            </div>
        </div>

    )
}

export default ClientList