import {useStates, useFetch} from 'react-easier'
import { objectifyForm } from "../modules/objectifyForm.js"

export default function () {

    const checkoutForm = useStates({
        "email": "example@example.com",
        "password": "supersecretpassword",
        "street_address": "123 Main St",
        "states": [ 
            {
                
            },
            {
                "value": "AL",
                "text": "Alabama"
            },
            {
                "value": "AS",
                "text": "Alaska"
            },
            {
                "value": "AR",
                "text": "Arkansas"
            },
            {
                "value": "CA",
                "text": "California"
            },
            {
                "value": "TX",
                "text": "Texas"
            },
            {
                "value": "NY",
                "text": "New York"
            }
        ]
    }
        // useFetch('/user-data.json')
    );

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
        <input type="email" name="email" {...checkoutForm.bind('email')} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" {...checkoutForm.bind('password')} />

        <label htmlFor="street-address">Address</label>
        <input type="text" name="street-address" placeholder="1234 Main St" {...checkoutForm.bind('street_address')} />       

        <label htmlFor="states">States</label>
        <select name="states" multiple>
            {checkoutForm.states.map(state=> <option value={state.value}>{state.text}</option>)}
        {/* <option selected>Choose...</option>
        <option value="AL"  {...checkoutForm.bind('states','al')}>Alabama</option>
        <option value="AS"  {...checkoutForm.bind('states','as')}>Alaska</option>
        <option value="AR"  {...checkoutForm.bind('states','ar')}>Arkansas</option>            
        <option value="CA"  {...checkoutForm.bind('states','ca')}>California</option> */}
        </select>

        <label htmlFor="city">City</label>
        <input type="text" name="city" />

        <label htmlFor="zip">Zip</label>
        <input type="text" name="zip" value={checkoutForm.zip} onChange={e=>checkoutForm.zip=e.target.value} />
        
        <button type="submit">Send</button>
    </form>
}
