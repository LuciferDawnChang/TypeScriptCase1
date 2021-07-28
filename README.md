# TypeScriptCase #
ts学习文件 个人学习实验使用

通过npm i typescript -g下载
通过tsc name.ts编译为js

ts可以兼容js
## ts01 ##
1. ### TypeDeclarations ###
通过
<br>	: 数据类型
<br>的形式规定了变量的类型格式 避免了数据类型的混乱
<br>变量申明为 let num: number;<br>
    function sum (a:number, b:number) {
      console.log(a + b)
    }
<br>也可以为函数参数规定类型
<br>传递参数类型错误的话会有红色波浪线提示
<br>但是