const mysql=require('mysql');

const conn=mysql.createConnection({
    port:'3306',
    host:'127.0.0.1',
    user:'root',
    password:'clxclx',
    database:'my_firstdb'
})
conn.query('select * from user',(error,result,field)=>{
    if(error) throw(error);

    console.log(result)
    // conn.release()
})