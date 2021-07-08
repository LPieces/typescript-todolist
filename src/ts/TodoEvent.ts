import TodoDom from "./TodoDom";
import { ITodoData } from "./typings";

class TodoEvent extends TodoDom {

    private todoData: ITodoData[];

    constructor( todoData: ITodoData[], todoWrapper: HTMLElement ){
        super(todoWrapper);
        this.todoData = todoData;
        this.init();
    }

    private init() {
        this.initDom(this.todoData);
    }

    public addTodo (todo: ITodoData): void {
        const _todo: null | ITodoData = this.todoData.find((item: ITodoData)=>item.content === todo.content);
        if(!_todo){
            this.todoData.push(todo);
            this.addItem(todo);
        }else{
            alert('内容已存在');
        }
    }

    public removerTodo (id: number, target: HTMLElement): void {
        this.todoData = this.todoData.filter((item: ITodoData)=> item.id !== id);
        this.removeItem(target);
    }

    public toggleComplete (id: number, target: HTMLElement): void {
        this.todoData = this.todoData.map((item: ITodoData)=>{
            if(item.id === id){
                item.completed = !item.completed;
                this.changeCompleted(target, item.completed);
            }
            return item;
        });
    }

}
export default TodoEvent;