import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
    
        console.log('Support', support);

        dispatch({
            type: 'ADD_SUPPORT',
            payload: {
                support,
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
            <form onSubmit={handleSubmit} className="add-support">
                <label>How well do you feel supported?</label>
                <input 
                required 
                value={support}
                onChange={(event) => setSupport(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Support;