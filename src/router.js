/* eslint-disable no-unused-vars */
import { HomePage, TestPage } from './pages';

const Router = (() => {
    const rootTarget = document.getElementById('root');
    const router = {
        '/': HomePage,
        '/test': TestPage,
    };

    const init = () => {
        new router[location.pathname](rootTarget);

        window.addEventListener('popstate', () => {
            renderPage(location.pathname);
        });
    };

    const pushHistory = (pathName, info) => {
        history.pushState(info, null, location.origin + pathName);
        renderPage(pathName);
    };

    const replaceHistory = (pathName, info) => {
        history.replaceState(info, null, location.origin + pathName);
        renderPage(pathName);
    };

    const renderPage = (pathName) => {
        const [matchPathName, ...others] = pathName.split('?');
        new router[matchPathName](rootTarget);
    };

    return {
        init,
        pushHistory,
        replaceHistory,
    };
})();

export default Router;
