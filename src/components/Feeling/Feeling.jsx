import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Feeling(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    // console.log(feeling, "???????");

    const handleSubmit = evt => {
        evt.preventDefault();
        // console.log('Feeling', feeling);

        dispatch({
            type: 'ADD_FEELING',
            payload: {
                feeling,
            }
        });
        history.push('/understanding');
        setFeeling('');
    }    

    return(
        <div>
            <h4>Page 1 of 4</h4>
            <form onSubmit={handleSubmit} className="add-feeling">
                <label>How are you feeling?</label>
                <input 
                required 
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
            
        </div>
    )
}

export default Feeling;