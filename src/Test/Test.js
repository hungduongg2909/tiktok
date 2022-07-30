import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Test.module.scss';

const cx = classNames.bind(styles);

function Test() {
    const show = useSelector((state) => state.modal.isModal);

    return (
        <div disabled={show} className={`${cx('test')} test`}>
            Test
        </div>
    );
}

export default Test;
