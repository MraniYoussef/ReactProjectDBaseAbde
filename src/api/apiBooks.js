const ENDPOINT = 'http://localhost:3001/books';

const headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json' 
};


export const getBooksApi = async () => {
    const res = await fetch(ENDPOINT, {headers});
    const json = await res.json();
    return json;
}

export const searchBookApi = async title => {
    let res;
    try{
         res = await fetch(ENDPOINT +"/"+ title, {headers});

    }catch(err){
        throw "ERROR REQUEST";
    } if (res.status === 404) throw "ERROR 404";
    
    const json = await res.json();
    return json;
}

export const addBooksApi = async data => {
    let res;
try{
         res = await fetch(ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        });
    }catch(err){
            throw "ERROR REQUEST";
    }if (res.status === 404){
        throw "CANT ADD 404 "
    }
    
    const json = await res.json();
    return json;
}

export const saveBooksApi = async data => {
    const res = await fetch(ENDPOINT + "/" + data.id,  {
        method: 'PUT',
        body: JSON.stringify(data), 
        headers
    });
    const json = await res.json();
    return json;
}

export const deleteBooksApi = async id => {
    let res;
    try {
         res = await fetch(`${ENDPOINT}/${id}`, {method: 'DELETE', headers });
  
    }catch(err){
        return "ERROR REQUEST"}
    if(res.status === 404){
        throw Error('cant delete 404');
    }  
const json = await res.json();
return json;
    
}
