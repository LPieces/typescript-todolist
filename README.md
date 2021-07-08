# 面向对象、类的继承、横向切割程序 - 设计方案
1.  程序进行分类
    外层：浏览器的事件 > 调用方法 > 事件处理函数的绑定
    操作数据：addTodo、removerTodo、toggleComplete
    操作DOM: addItem、removeItem、changeCompleted
    管理模板：todoView -> 接受参数