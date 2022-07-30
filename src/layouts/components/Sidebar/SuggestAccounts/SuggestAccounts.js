import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from '~/redux/actions/postAction';
import AccountItem from '~/components/AccountItem';
import * as suggestAccounts from '~/services/getSuggestAccounts';
import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestAccounts({ className }) {
    const dispatch = useDispatch();
    const listAcc = useSelector((state) => state.posts.data);

    const [numAcc, setNumAcc] = useState(5);
    const [more, setMore] = useState('See all');

    useEffect(() => {
        dispatch(loadPosts());
        // eslint-disable-next-line
    }, []);

    const handleMore = () => {};

    const HandleListAcc = ({ numAcc }) => {
        return <>{listAcc.length > 0 && listAcc.map((acc) => <AccountItem key={acc.id} data={acc} />)}</>;
    };

    return (
        <div className={className}>
            <p className={cx('text-heading')}>Suggested accounts</p>
            <HandleListAcc numAcc={numAcc} />
            <div className={cx('text-more')}>
                <p onClick={handleMore}>{more}</p>
            </div>
        </div>
    );
}

export default SuggestAccounts;
