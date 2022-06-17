import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Understanding(){
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
    
        console.log('Understanding', understanding);

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: {
                understanding,
            }
        });
    }    

    return(
        <div>
            <h2>FeedBack!</h2>
            <h5>Page 2 of 4</h5>
            <form onSubmit={handleSubmit} className="add-understanding">
                <label>How well are you understanding the content?</label>
                <input 
                required 
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                />
            </form>
            <Link to='/supported'>
            <button type="submit">Next</button>
            </Link>
        </div>
    )
}

export default Understanding;