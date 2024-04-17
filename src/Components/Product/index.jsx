import './product.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function Product({products, handleremoveProduct}){

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Produto</th>
                        {/* <th>codigo </th> */}
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(products) &&
                products.map((prod) => (
                <tr key={prod.id}>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>{prod.product}</td>
                    {/* <td>{prod.id}</td> */}
                    <td>{prod.amount}</td>
                    <td>R$ {prod.price}</td>
                    <td><button onClick={() => handleremoveProduct(prod.id)} className='delete-button'><HighlightOffIcon /></button></td>
                </tr>
                ))}
                </tbody>
            </table>
        </>
            // verificar se conta esta vazia
    )
}