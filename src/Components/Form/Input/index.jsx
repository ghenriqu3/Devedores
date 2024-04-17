import './customInput.css'

function Input({type, name, text, handleChange, placeholder, value}){
    return(
        <div className='custom-input'>
            <label htmlFor={name}>{text}:</label><br />
            <input type={type} name={name} placeholder={placeholder} onChange={handleChange} value={value} required/>
        </div>
    )
}

export default Input