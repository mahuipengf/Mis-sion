import { func } from './app';

import imgsrc from './src/asset/img.png';
import imgsvg from './src/asset/tu.svg';
import imgxysrc from './src/asset/xy.jpeg';
import './index.css';


const aduFunc = func;


console.log(aduFunc());

/**
 * 测试css-loader 加载
 */
const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #f0f; color: #fff';
div.textContent = '是否渲染了';

document.body.appendChild(div);

/**
 * 测试图片打包
 * 
 */
const img = document.createElement('img');
img.style = "width: 400px;"
img.src = imgxysrc;

document.body.appendChild(img);

const svg = new Image();
svg.src = imgsvg;

document.body.appendChild(svg);

/**
 * 字体
 * 支持本地文件打包
 */
const testFontFamily = document.createElement('div');
testFontFamily.textContent = '春风十里不如你';
testFontFamily.classList.add('font-family');

document.body.appendChild(testFontFamily);

const testFontFamily1 = document.createElement('div');
testFontFamily1.textContent = '夏雨淋你十里地';
testFontFamily1.classList.add('font-han');

document.body.appendChild(testFontFamily1);

console.log('配置热重载，加载成功')





