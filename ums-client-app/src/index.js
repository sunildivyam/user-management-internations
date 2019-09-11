import './web-components';
import './styles/index.less';
import homeTmpl from './page-views/home.html';
import userdetailTmpl from './page-views/user-details.html';
import router from './services/router';

const main = () => {
    const routes = [
        {
            path: '/home',
            template: homeTmpl,
            title: 'Home'
        },
        {
            path: '/userdetail',
            template: userdetailTmpl,
            title: 'Users'
        },
        {
            path: '/groupdetail',
            template: '<group-detail-page></group-detail-page>',
            title: 'Groups'
        }
    ];

    router.routes = routes;
    router.viewTargetElementId = 'route-view';
    //loads the first route
    router.navigate(location.pathname);
    //triggers the appload event
    const appload = new Event('appload');
    document.dispatchEvent(appload);
}
// Bootstraping the application
main();