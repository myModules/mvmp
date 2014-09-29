/**
 * Created by gys on 2014/9/29.
 */

var fs  = require('fs');

var env = process.env.NODE_ENV || 'development';
//console.log('当前的环境变量是: '+env);
var path  = __dirname+'/config.'+env+'.json';
//console.log(fs.existsSync(path));
var config="";
if(fs.existsSync(path)){
    config = require(path);
    //console.log('引入配置文件:'+path.split('/')[1]);
} else {
    config = require('./config.json');
    //console.log('未找到指定的配置文件,使用默认配置: config.json');
}

module.exports = config;

