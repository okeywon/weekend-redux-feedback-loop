import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Supported(){
    const history = useHistory();
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
        history.push('/comments');
    }    

    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Page 3 of 4</h4>
            </header>
            <form onSubmit={handleSubmit} className="add-supported">
                <label>How well do you feel supported?</label>
                <input 
                required 
                value={supported}
                onChange={(event) => setSupported(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Supported;