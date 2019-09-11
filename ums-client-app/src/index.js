import './web-components';
import './styles/index.less';
import homeTmpl from './page-views/home.html';
import userdetailTmpl from './page-views/user-details.html';
import groupdetailTmpl from './page-views/group-details.html';
import router from './services/router';
import loader from './services/loader-service';

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
            template: groupdetailTmpl,
            title: 'Groups'
        },
        {
            path: '/managegroup',
            template: '<wc-group-form></wc-group-form>',
            title: ''
        },
        {
            path: '/manageuser',
            template: '<wc-user-form></wc-user-form>',
            title: ''
        }
    ];
    // loader subscription
    loader.subscribe((loading) => {
        const loaderEl = document.querySelector('wc-loader');
        loaderEl.setAttribute('loading', loading);
    });
    //Routes init
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