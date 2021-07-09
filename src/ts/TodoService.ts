import $ from 'jquery';
import { ITodoData } from './typings';

export function getTodoList (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    // 保存原有的init
    const _origin = descriptor.value;

    // 重写init
    descriptor.value = function (todoData: ITodoData[]) {
        $.get('http://localhost:8080/todolist').then((res: string)=>{
            if(res){
               todoData = JSON.parse(res); 
            }
        }).then(()=>{
            _origin.call(this,todoData);
        })
    }
}