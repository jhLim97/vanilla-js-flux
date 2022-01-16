import Component from '../../core/Component';

export default class Home extends Component {
    template() {
        const template = `
            <header class="home-header">헤더</header>
            <main class="home-main">메인</main>
            <footer class="home-footer">푸터</footer>
        `;

        return template;
    }

    didMount() {
        console.log('헤더, 메인, 푸터 컴포넌트 생성 및 프롭스 주입');
    }
}
