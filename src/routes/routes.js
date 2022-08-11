import config from '~/config';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Music from '~/pages/Music';
import Tag from '~/pages/Tag';

// Layout
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
    { path: config.routes.music, component: Music },
    { path: config.routes.tag, component: Tag },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
