import {createPool} from 'mysql2/promise';

export const connect =  async() => {
     const connection = await createPool({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'yiya'
    });

    return connection;
}; 