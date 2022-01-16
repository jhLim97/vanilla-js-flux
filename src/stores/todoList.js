import CreateStore from '../core/Store';

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
            return { todos: [...state.todos, action.todo] };
        case 'DELETE':
            return { todos: [...state.todos.filter((todo) => todo.id !== action.id)] };
        default:
            return state;
    }
};

const initState = { todos: ['백준 1문제 풀기', '‘그해 우리는’ 시청', '밥 맛있게 먹기'] };
const todoStore = CreateStore(initState, todoReducer);

export default todoStore;
