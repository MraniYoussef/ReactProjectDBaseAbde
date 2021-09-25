import { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";

import {addBooksApi, deleteBooksApi, getBooksApi, saveBooksApi, searchBookApi} from "./api/apiBooks";

function App() {
  const [books , setBooks] = useState(null);

  useEffect(() => {
    //Appel webService
    const fetchData = async () => {
      const books = await getBooksApi();
      setBooks(books)
    }
      fetchData();   
  }, []);

 
  const filterBooks = async keyword => {
    try{
      const filtredBooks = await searchBookApi(keyword);
      setBooks(filtredBooks);

    }catch(err){
      console.log(err);
    }
  }

  const addBook = async data => {
    try{
      const id = await addBooksApi(data);
      const book = {...data, id};
      setBooks([...books, book]);
    }catch(err){
      console.log(err)
    }
  }

  const deleteBook = async id => {
      try{
        await deleteBooksApi(id);
         const newBooks = books.filter(book => book.id !== id);
          setBooks([...newBooks]);
      }catch(err) {
        console.log(err);
      }
        }

  const saveBook = async data => {
    console.log(data);

    try {
      const newBook = await saveBooksApi(data);
      const newBooks = [...books];
      const foundBook = newBooks.find(book => book.id === newBook.id);
      foundBook.title = newBook.title;
      foundBook.description = newBook.description;
      setBooks(newBooks);
    }catch(err) {
      console.log(err);
    }
  }
    
        const resetBooks = async () => {
         const books = await getBooksApi();
         setBooks(books);
        }

       
  
  return (
    <>
      <Header>
        <h1>Header</h1>
      </Header>
      <SearchBar filterBooksCallBack={filterBooks} resetBooksCallBack={resetBooks} />
       {books
      ? <BookList books={books} deleteBookCallBack={deleteBook} saveBookCallBack={saveBook} /> 
      : <div> Loading...</div>
      }
            <AddBookForm addBookCallBack={addBook}/>

    </>
  );
}

export default App;
