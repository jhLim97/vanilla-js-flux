import Component from '../../core/Component';
import { todoStore, DELETE_ACTION } from '../../stores/todoList';

export default class TodoList extends Component {
    template() {
        const { todos } = todoStore.getState();
        const template = `
            <div class="home-main__todos">
                ${todos
                    .map(
                        (todo, id) =>
                            `<div class="home-main__todo">
                                ${todo}
                                <button data-id="${id}">삭제</button>
                            </div>`,
                    )
                    .join('')}
            </div>
        `;

        return template;
    }

    setEvent() {
        const deleteTodo = (e) => {
            const deleteButton = e.target.closest('button');
            if (!deleteButton) return;

            const targetId = Number(deleteButton.dataset.id);
            todoStore.dispatch(DELETE_ACTION(targetId));
        };

        this.target.addEventListener('click', deleteTodo);
    }

    didMount() {
        todoStore.subscribe(this.render.bind(this));
    }
}
