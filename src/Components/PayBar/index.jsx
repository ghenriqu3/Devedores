import './paybar.css'
export default function PayBar(accounts){

    const payTotal = () => {
        const account = accounts.accounts.account
        if(account) {
            return accounts.accounts.account.reduce((acc, e) => acc + parseFloat(e.price), 0.0) 
        } else {
            return 0;
        }
    }

    return(
        <div className='pay-bar'>
            <div className='content-pay'><b>Total</b>: {payTotal().toFixed(2)}</div>
            <button type='submit'>Pagar</button>
        </div>
    )
}