import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
    PopulationIcon,
    MusicIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import SuggestAccounts from './SuggestAccounts';
import { openModal } from '~/redux/actions/modalAction';

const cx = classNames.bind(styles);

const DISCOVER = [
    {
        name: 'suthatla',
        type: 'user',
    },
    {
        name: 'mackedoi',
        type: 'user',
    },
    {
        name: 'sansangthaydoi',
        type: 'user',
    },
    {
        name: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
        type: 'music',
    },
    {
        name: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũngckedoi',
        type: 'music',
    },
    {
        name: 'Thiên Thần Tình Yêu - RICKY STAR',
        type: 'music',
    },
    {
        name: '7749hieuung',
        type: 'user',
    },
];

const FOOTER = [
    [
        {
            title: 'About',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'TikTok Browse',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Newsroom',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Contact',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Careers',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'ByteDance',
            href: 'https://www.tiktok.com/about?lang=en',
        },
    ],
    [
        {
            title: 'TikTok for Good',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Advertise',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Developers',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Transparency',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'TikTok Rewards',
            href: 'https://www.tiktok.com/about?lang=en',
        },
    ],
    [
        {
            title: 'Help',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Safety',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Terms',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Privacy',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Creator Portal',
            href: 'https://www.tiktok.com/about?lang=en',
        },
        {
            title: 'Community Guidelines',
            href: 'https://www.tiktok.com/about?lang=en',
        },
    ],
];

function Sidebar() {
    const currentUser = !useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const handleLog = () => {
        dispatch(openModal());
    };

    const discoverItem = DISCOVER.map((dis, index) => {
        let type;
        let icon;
        switch (dis.type) {
            case 'user':
                type = `/tag`;
                icon = <PopulationIcon className={cx('discover-svg')} />;
                break;
            case 'music':
                type = '/music';
                icon = <MusicIcon className={cx('discover-svg')} />;
                break;
            default:
                break;
        }

        return (
            <Link key={index} to={type} className={cx('discover_item')}>
                {icon}
                <p className={cx('discover_text')}>{dis.name}</p>
            </Link>
        );
    });

    const footer = FOOTER.map((items, index) => {
        return (
            <div key={index} className={cx('footer-item')}>
                {items.map((item, index) => {
                    return (
                        <a key={index} className={cx('footer-text')} href={item.href}>
                            {item.title}
                        </a>
                    );
                })}
            </div>
        );
    });

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
                    <p className={cx('text-headingLog')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button className={cx('login')} text large outline onClick={handleLog}>
                        Log in
                    </Button>
                </div>
            )}

            <div className={cx('container')}>
                <p className={cx('text-heading')}>Suggested accounts</p>

                <SuggestAccounts />
            </div>

            <div className={cx('container')}>
                <p className={cx('text-heading')}>Discover</p>
                <div className={cx('discover')}>{discoverItem}</div>
            </div>

            <div className={cx('container')}>
                <p className={cx('text-heading')}></p>
                {footer}
                <span className={cx('footer-text')}>© 2022 TikTok</span>
            </div>
        </aside>
    );
}

export default Sidebar;
