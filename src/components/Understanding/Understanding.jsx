import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding(){
    const history = useHistory();
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
        history.push('/support');
    }    

    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Page 2 of 4</h4>
            </header>
            <form onSubmit={handleSubmit} className="add-understanding">
                <label>How well are you understanding the content?</label>
                <input 
                required 
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Understanding;