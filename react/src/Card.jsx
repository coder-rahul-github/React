
import Button from './Button';

function Card({username,course,contact}) {
    console.log(username,course,contact);
    return (
        <>
        <div className='bg-amber-100 border-2 p-4 w-fit'>
            <img alt='Profile Pic'></img>
            <h2>{username}</h2>
            <p>
                <strong>{course}</strong>
            </p>
            <p>
                <strong>{contact}</strong>
            </p>
            <Button />
        </div>
        </>
    );
};

export default Card;
