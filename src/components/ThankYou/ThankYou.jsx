import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function ThankYou(){
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const returnHome = () => {
        submitFeedback();
            history.push('/');
        }

    const submitFeedback= () => {
    
        axios({
            method: 'POST', 
            url:'/api/feedback', 
            data: {
                feeling: feeling.feeling,
                understanding: understanding.understanding,
                support: support.support,
                comments: comments.comments,
            }
        }).then (res =>{
            console.log('in POST success', res);                                                                                                                                                                izzas();
        })
        .catch(err=>{
            console.log('error in POST at ThankYou', err);
        });
    }

    return(
        <div>
            <h4>Feedback Submitted!</h4>
            <button onClick={returnHome}>Leave New Feedback</button>
        </div>
    );
}

export default ThankYou;