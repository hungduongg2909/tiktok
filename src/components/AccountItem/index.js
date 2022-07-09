import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/44f6894272f825f041ef6c07ffb95fbd~c5_300x300.webp?x-expires=1657177200&x-signature=ZbCQVJycqFC0rzmNlFYMUEFrTTI%3D"
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
