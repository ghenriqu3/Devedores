import './paybutton.css'

export default function PayButton({accountPay}){ 
    return(
        <button onClick={accountPay}>Pagar conta</button> 
    )
}