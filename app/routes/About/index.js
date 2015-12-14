module.exports = function(location, cb) {
        if (typeof require.ensure == 'function') {
            require.ensure([], (require) => {
                cb(null, require('./components/About'))
            })
        } else {
            cb(null, require('./components/About'));

        }
    }

