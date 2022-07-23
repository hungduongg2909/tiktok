import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import SuggestAccounts from './SuggestAccounts';
import Auth from '~/Auth';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>

            {currentUser && (
                <div className={cx('container')}>
                    <p className={cx('text-heading')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button className={cx('login')} text large outline>
                        <Auth />
                    </Button>
                </div>
            )}

            <div className={cx('container')}>
                <SuggestAccounts />
            </div>
        </aside>
    );
}

export default Sidebar;
