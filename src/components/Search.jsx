import {useStates} from 'react-easier'

export default function Search(){

    const s = useStates({search: ''});

    return (
            <input type="text" id="search" placeholder="Type to search" {...s.bind('search')}/>
    )

}
