const viewElementId = 'root';
const DEFAULT_PATH = '/home' ;
class Router {
    constructor() {
        this._activeRoute = {};
        this._viewElmId = viewElementId;
        this._routes = [];
        this.subscribers = [];
        window.addEventListener('popstate',() => {
            const route = this.getRoute(window.location.pathname);
            this._activeRoute = route;
            this.renderView(route.template);
            this.notifySubscribers();
        });
    }

    get activeRoute() {
        return this._activeRoute;
    }
    get viewTargetElementId() {
        return this._viewElmId;
    }

    set viewTargetElementId(selectorId) {
        this._viewElmId = selectorId || viewElementId;
    }

    get routes() {
        return this._routes;
    }
    set routes(rts) {
        this._routes = rts;
    }
    static getInstance() {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }
    getRoute(pathName) {
        return this._routes.find(p => p.path === pathName);
    }
    subscribe(cb) {
        typeof cb === 'function' && this.subscribers.push(cb);
    }

    notifySubscribers(route) {
        this.subscribers.map(cb => cb(route));
    }

    navigate(path, options, cb) {
        const op = options || {};
        let route = this.getRoute(path);
        if (!route) {
            route = this.getRoute(DEFAULT_PATH);
            path = DEFAULT_PATH;
        }
        const pathName = `${path}`;
        this._activeRoute = route;
        //render the template
        this.renderView(route.template);
        //push to history
        window.history.pushState(op.data, document.title, pathName);
        //notify the subscribers
        this.notifySubscribers(route);
    }

    renderView(html) {
        const viewElement = document.getElementById(this.viewTargetElementId);
        if (!viewElement) {
            return;
        }
        viewElement.innerHTML = html;
    }

    unsubscribe(cb) {
        subscriberIndex = this.subscribers.indexOf(cb);
        if (subscriberIndex >= 0) {
            this.subscribers.splice(subscriberIndex, 1);
        }
    }
}

export default Router.getInstance();