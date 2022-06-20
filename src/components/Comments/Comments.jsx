import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Comments(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
    
        console.log('Comments', comments);

        dispatch({
            type: 'ADD_COMMENTS',
            payload: {
                comments,
            }
        });
        history.push('/thankYou');
    }    

    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Page 4 of 4</h4>
            </header>
            <form onSubmit={handleSubmit} className="add-comments">
                <label>Do you have any comments to share?</label>
                <input 
                required 
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Comments;