import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Comments(){
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
    }    

    return(
        <div>
            <h2>FeedBack!</h2>
            <h5>Page 4 of 4</h5>
            <form onSubmit={handleSubmit} className="add-comments">
                <label>Do you have any comments to share?</label>
                <input 
                required 
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                />
            </form>
            <Link to='/thankYou'>
            <button type="submit">Next</button>
            </Link>
        </div>
    )
}

export default Comments;