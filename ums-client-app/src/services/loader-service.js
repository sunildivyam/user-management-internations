/*
    This Service is, which any component can subscribe, and it lets 
    know the current status of something is loading, and any loader can be shown.
    It quees any coming loading requests, and notifies the subscribers when no Loading requests are pending.
*/
class LoaderService {
    constructor() {
        this.activeLoadingRequests = 0;
        this.subscribers = [];
    }
    static getInstance() {
        if (!LoaderService.instance) {
            LoaderService.instance = new LoaderService();
        }
        return LoaderService.instance;
    }

    subscribe(cb) {
        typeof cb === 'function' && this.subscribers.push(cb);
    }

    notifySubscribers(status) {
        this.subscribers.map(cb => cb(status));
    }

    unsubscribe(cb) {
        subscriberIndex = this.subscribers.indexOf(cb);
        if (subscriberIndex >= 0) {
            this.subscribers.splice(subscriberIndex, 1);
        }
    }

    start() {
        this.activeLoadingRequests++;
        this.notifySubscribers(true);
    }
    stop() {
        this.activeLoadingRequests--;
        if (this.activeLoadingRequests === 0) {
            this.notifySubscribers(false);
        }
    }
}

export default LoaderService.getInstance();