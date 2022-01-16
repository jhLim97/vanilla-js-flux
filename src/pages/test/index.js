import Component from '../../core/Component';

export default class Test extends Component {
    template() {
        const template = `
            <main class="test-main">테스트 페이지입니다.</main>
        `;

        return template;
    }
}
