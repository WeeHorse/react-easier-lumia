import {useStates} from 'react-easier'
import { objectifyForm } from "../modules/objectifyForm.js"

export default function () {

    const checkoutForm = useStates(useFetch('/user-data.json'));

    const watchFormState = () => {
        console.log('called')
    }

    const submitCheckout = async (e)=>{
        e.preventDefault()
        await fetch('/',{
            method: 'post',
            body: JSON.stringify(objectifyForm(e.target))
        })
    }

    return <form id="checkout" onSubmit={submitCheckout} onChange={watchFormState}>

        <label for="email">Email</label>
        <input type="email" name="email" {...checkoutForm.bind('email')} />

        <label for="password">Password</label>
        <input type="password" name="password" {...checkoutForm.bind('password')} />

        <label for="street-address">Address</label>
        <input type="text" name="street-address" placeholder="1234 Main St" {...checkoutForm.bind('street-address')} />       

        <label for="states">States</label>
        <select name="states" multiple  {...checkoutForm.bind('states')}>
        <option selected>Choose...</option>
            <option value="al">Alabama</option>
            <option value="as">Alaska</option>
            <option value="ar">Arkansas</option>            
            <option value="ca">California</option>
        </select>

        <label for="city">City</label>
        <input type="text" name="city" {...checkoutForm.bind('city')} />

        <label for="zip">Zip</label>
        <input type="text" name="zip" {...checkoutForm.bind('zip')} />
        
        <button type="submit">Send</button>
    </form>
}
