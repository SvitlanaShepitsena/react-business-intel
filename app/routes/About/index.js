// Common js modular system with es5 syntax
module.exports = function(location, cb) {
        if (typeof require.ensure == 'function') {
            /* Asynchronous loading of a component that is inside of require.ensure */
            require.ensure([], (require) => {
                cb(null, require('./components/About'))
            })


        } else {
            /* Server side synchronous loading */
            cb(null, require('./components/About'));

        }
    }

