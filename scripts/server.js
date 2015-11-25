import express from 'express';
import app from '../app/server'; // React server
import graphQL from '../graphql'; // GraphQL server

const env = process.env;
const host = env.npm_package_config_appServerHost;
const port = env.npm_package_config_appServerPort;

let router = express();
router.use('/graphql', graphQL);
router.use('/*', app);
var user = process.env.USER;
let server;

if (!(user === 'ec2-user' || user === 'root')) {
    server = router.listen(80);
} else {
    server = router.listen(port,host);
}

export default server;
