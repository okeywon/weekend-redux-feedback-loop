import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function ThankYou(){
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const supported = useSelector(store => store.supported);
    const comments = useSelector(store => store.comments);

    const returnHome = () =>{
        submitFeedback();
            history.push('/');
        }

    const submitFeedback= () =>{
    
        axios.post({
            method: 'POST', 
            url:'/api/feedback', 
            data: {
                feeling,
                understanding,
                supported,
                comments,
            }
        }).then (res =>{
            console.log('in POST success', res);
            displayFeedback();                                                                                                                                                                  izzas();
        })
        .catch(err=>{
            console.log('error in POST', err);
        });
    }

    return(
        <div>
            <h5>Feedback Submitted!</h5>
            <button onClick={returnHome}>Leave New Feedback</button>
        </div>
    );
}

export default ThankYou;