var ReactDOM = require('react-dom');
module.exports = function (React) {
    if (React.addons && React.addons.InfiniteScroll) {
        return React.addons.InfiniteScroll;
    }
    React.addons = React.addons || {};
    var touchStart = {};
    var InfiniteScroll = React.addons.InfiniteScroll = React.createClass({
        getDefaultProps: function () {
            return {
                pageStart: 0,
                hasMore: false,
                loadMore: function () {
                },
                threshold: 250
            };
        },
        componentDidMount: function () {
            this.pageLoaded = this.props.pageStart;
            //this.attachScrollListener();
        },
        componentDidUpdate: function () {
            if (this.props.scrollStart) {
                this.attachScrollListener();
            }
        },
        render: function () {
            var props = this.props;
            return React.DOM.div(null, props.children, props.scrollStart && props.hasMore && (props.loader || InfiniteScroll._defaultLoader));
        },
        scrollListener: function (e) {
            var el = ReactDOM.findDOMNode(this);
            if (el.offsetHeight - $(el).parent()[0].scrollTop - $(el).parent()[0].clientHeight <= 0) {
                this.detachScrollListener();
                // call loadMore after detachScrollListener to allow
                // for non-async loadMore functions
                this.props.loadMore(this.pageLoaded += 1);
            } else if ($(el).parent()[0].scrollTop == 0 && e && e.changedTouches && e.changedTouches[0].pageY > touchStart.Y) {
                this.props.refresh();
            }
        },
        attachScrollListener: function () {
            var el = ReactDOM.findDOMNode(this);
            if (!this.props.hasMore) {
                return;
            }
            $(el).parent()[0].addEventListener('scroll', this.scrollListener);
            $(el).parent()[0].addEventListener('resize', this.scrollListener);
            $(el).parent()[0].addEventListener('touchstart', this.setTouchStart);
            $(el).parent()[0].addEventListener('touchend', this.scrollListener);
            this.scrollListener();
        },
        detachScrollListener: function () {
            var el = ReactDOM.findDOMNode(this);
            $(el).parent()[0].removeEventListener('scroll', this.scrollListener);
            $(el).parent()[0].removeEventListener('resize', this.scrollListener);
            $(el).parent()[0].removeEventListener('touchend', this.scrollListener);
        },
        componentWillUnmount: function () {
            this.detachScrollListener();
        },
        setTouchStart: function (e) {
            touchStart = {
                Y: e.targetTouches[0].pageY,
                X: e.targetTouches[0].pageX
            }
        }
    });
    InfiniteScroll.setDefaultLoader = function (loader) {
        InfiniteScroll._defaultLoader = loader;
    };
    return InfiniteScroll;
};