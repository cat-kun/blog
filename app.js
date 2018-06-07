// 应用程序入口文件

// 加载 express 模块
const express = require('express');
// 加载模板处理模块，后端逻辑和页面表现分离
const swig = require('swig');
// 创建 app 应用，等同于 NodeJS Http.createServer()对象
const app = express();

/** 
 * 配置应用模板
 */
// 定义当前应用所使用的模板引擎
// 第一个参数表示模板引擎名称，同时也是模板文件的后缀。第二个参数表示用于处理模板内容的方法
app.engine('html', swig.renderFile);
// 设置模板文件存放的目录，第一个参数必须是 views，第二个参数是目录
app.set('views', './views');
// 注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和 app.engine 方法中定义的模板引擎的名称(第一个参数)必须一致
app.set('view engine', 'html')
// 在开发过程中，需要关掉模板缓存
swig.setDefaults({cache: false});

// 设置静态文件托管
// 当用户访问的 url 以/public 开始，那么直接返回对应__dirname + '/public'下的文件
app.use('/public', express.static(__dirname + '/public'));

// 模块管理
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));
/**
 * 首页：
 *  req request 对象
 *  res response 对象
 *  next 函数
 */

app.get('/', (req, res, next) => {
    // res.send('<h1>222</h1>');
    /** 
     * 第一个参数表示模板文件，相对于 views 目录下，可不写后缀，views/index.html
     * 第二个参数，传递给模板使用的数据（后期）
     */
    res.render('index')
})
// 监听 http 请求
app.listen(8888);