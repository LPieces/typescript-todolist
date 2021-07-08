import { ITodoData } from './ts/typings';
import TodoEvent from './ts/TodoEvent';

;((document)=>{

    const oInput: HTMLInputElement = document.querySelector('input');
    const oAddBtn: HTMLButtonElement = document.querySelector('button');
    const oTodoList: HTMLDivElement = document.querySelector('.todo-list');
    
    const todoData: ITodoData[] = [
        // {
        //     id: new Date().getTime(),
        //     content: '123',
        //     completed: false
        // }
    ];

    const init = (): void => {
        bindEvent();
    }

    function bindEvent(): void {
        oAddBtn.addEventListener('click', handleAddBtnClick, false);
        oTodoList.addEventListener('click', handleListClick, false);
    }

    function handleAddBtnClick(): void {
        const val = oInput.value.trim();
        if(val.length){
            todoEvent.addTodo(<ITodoData>{
                id: new Date().getTime(),
                content: val,
                completed: false
            });
        }
        oInput.value = '';
    }

    function handleListClick(e: MouseEvent): void {
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLocaleLowerCase();
        switch(tagName){
            case 'input':
                // todoEvent.toggleComplete(Number(tar.getAttribute('data-id')),tar);
                todoEvent.toggleComplete(Number(tar.dataset.id),tar);
                break;
            case 'button':
                // todoEvent.removerTodo(Number(tar.getAttribute('data-id')),tar);
                todoEvent.removerTodo(Number(tar.dataset.id),tar);
                break;
            default:
                break;
        }
    }
    const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList);
    init();

})(document)