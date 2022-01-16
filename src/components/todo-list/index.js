import Component from '../../core/Component';
import todoStore from '../../stores/todoList';

export default class TodoList extends Component {
    template() {
        const { todos } = todoStore.getState();
        const template = `
            <div class="home-main__todos">
                ${todos.map((todo) => `<div>${todo}</div>`).join('')}
            </div>
        `;

        return template;
    }

    didMount() {
        todoStore.subscribe(this.render.bind(this));
    }
}
