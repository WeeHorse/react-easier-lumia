import {useStates, useFetch} from 'react-easier'
import { objectifyForm } from "../modules/objectifyForm.js"

export default function () {


    const watchFormState = (e) => {
        console.log('called', e.target)
        console.log(checkoutForm[e.target.name])
    }

    const submitCheckout = async (e)=>{
        console.log('called', e.target)
        console.log(checkoutForm)
        e.preventDefault()
        await fetch('/',{
            method: 'post',
            body: JSON.stringify(objectifyForm(e.target))
        })
    }

    return <form id="checkout" onSubmit={submitCheckout} onChange={watchFormState}>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <label htmlFor="street-address">Address</label>
        <input type="text" name="street-address" placeholder="1234 Main St" />       

        <label htmlFor="states">States</label>
        <select name="states" multiple>
            {checkoutForm.states.map(state=> <option value={state.value}>{state.text}</option>)}
        </select>

        <label htmlFor="city">City</label>
        <input type="text" name="city" />

        <label htmlFor="zip">Zip</label>
        <input type="text" name="zip" value={checkoutForm.zip} />
        
        <button type="submit">Send</button>
    </form>
}
