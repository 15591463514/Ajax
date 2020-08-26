// 1.引用express
const express = require('express');
const { json } = require('express');
// const { request } = require('http');


// 2.创建应用对象
const app = express();

// 3.创建路由规则
    // request是对请求报文的封装
    // response是对相应报文的封装
app.get('/' ,(request,response)=>{

    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应体
    response.send('hello express [get]');
});

// all表示可以接受所有的请求
app.all('/server' ,(request,response)=>{

    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    response.send('hello express [post]');
});

// all表示可以接受所有的请求
app.all('/json-server' ,(request,response)=>{

    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');

    // 响应一个数据
    const data = {
        name:"sqs",
        gender:"男",
        age:22
    }

    // send方法只能放字符串，所以要先将数据转换为字符串
    let str = JSON.stringify(data);

    // 设置响应体
    response.send(str);
});

// 针对ie缓存
app.get('/ie',(request,response)=>{

    // 设置响应头   跨域问题
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应体
    response.send('针对ie缓存-1');
});

// 延时响应
app.all('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时相应');
    },3000);
    
});

// jQuery服务
app.all('/jQuery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const obj = {name:"sqs",age:22,gender:"♂"}
    response.send(JSON.stringify(obj));
});

// axios服务
app.all('/axios-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const obj = {name:"sqs",age:22,gender:"♂"}
    response.send(JSON.stringify(obj));
});

// fetch服务
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const obj = {name:"sqs",age:22,gender:"♂"}
    response.send(JSON.stringify(obj));
});






// 4，监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已启动，8000 端口监听中···");
});


