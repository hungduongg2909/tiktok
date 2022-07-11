import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1657540800&x-signature=u6QdGmBsRkgbgh4AeTOnjkBEvM8%3D"
                alt="Hoa"
                className={cx('avatar')}
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenhoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
