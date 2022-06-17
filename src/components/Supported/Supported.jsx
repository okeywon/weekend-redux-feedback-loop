import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Supported(){
    const dispatch = useDispatch();
    const [supported, setSupported] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
    
        console.log('Supported', supported);

        dispatch({
            type: 'ADD_SUPPORTED',
            payload: {
                supported,
            }
        });
    }    

    return(
        <div>
            <h2>FeedBack!</h2>
            <h5>Page 3 of 4</h5>
            <form onSubmit={handleSubmit} className="add-supported">
                <label>How well do you feel supported?</label>
                <input 
                required 
                value={supported}
                onChange={(event) => setSupported(event.target.value)}
                />
            </form>
            <Link to='/comments'>
            <button type="submit">Next</button>
            </Link>
        </div>
    )
}

export default Supported;