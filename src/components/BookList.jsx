import Book from "./Book/Book";

function BookList({books, deleteBookCallBack, saveBookCallBack}){

    return (
        <div>
           {books.map(book => <Book details={book} deleteBookCallBack={deleteBookCallBack} saveBookCallBack={saveBookCallBack} />)}
           
        </div>
    )
}
export default BookList;