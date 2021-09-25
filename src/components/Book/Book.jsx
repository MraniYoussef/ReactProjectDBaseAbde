import { useEffect, useState } from 'react';
import './Book.css';

function Book({details, deleteBookCallBack, saveBookCallBack}){

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });
    const [loading, setLoading] = useState(false);

    const handleOnDeleteClick = () => {
        deleteBookCallBack(details.id)
    }

    const handleOnEditClick = () => {
        setIsModeEdit(!isModeEdit)
    }
    const handleOnChange = e => {
        setData({
            ...data, [e.target.name] : e.target.value, 
        })
    }

    const handleOnSaveClick = async  () => {
        setLoading(true);
         await saveBookCallBack(data);
             setLoading(false);
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Book">
                <img src={details.imageUrl} />
                {loading ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='title'>Title : </label>
                            <input name='title' value={data.title} onChange={handleOnChange} />
                            <label for='description'>Description : </label>
                            <input name='description' value={data.description} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                                <h1>{details.title}</h1>
                                <p>{details.description}</p>
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Book;