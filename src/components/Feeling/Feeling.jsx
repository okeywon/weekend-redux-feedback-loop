import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Feeling(){
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
    
        console.log('Feeling', feeling);

        dispatch({
            type: 'ADD_FEELING',
            payload: {
                feeling,
            }
        });
    }    

    return(
        <div>
            <h2>FeedBack!</h2>
            <h5>Page 1 of 4</h5>
            <form onSubmit={handleSubmit} className="add-feeling">
                <label>How are you feeling?</label>
                <input 
                required 
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                />
            </form>
            <Link to='/understanding'>
            <button type="submit">Next</button>
            </Link>
        </div>
    )
}

export default Feeling;