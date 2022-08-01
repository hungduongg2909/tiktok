import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from '~/redux/actions/postAction';
import AccountItem from '~/components/AccountItem';
import * as suggestAccounts from '~/services/getSuggestAccounts';
import styles from './SuggestAccounts.module.scss';
import { set } from 'react-hook-form';

const cx = classNames.bind(styles);

function SuggestAccounts({ className }) {
    const dispatch = useDispatch();
    const listAcc = useSelector((state) => state.posts.data);

    const [numAcc, setNumAcc] = useState(5);
    const [more, setMore] = useState(false);

    useEffect(() => {
        dispatch(loadPosts());
        // eslint-disable-next-line
    }, []);

    const handleAll = () => {
        setMore(!more);
        setNumAcc(listAcc.length);
    };

    const handleLess = () => {
        setMore(!more);
        setNumAcc(5);
    };

    const HandleListAcc = ({ numAcc }) => {
        return (
            <>
                {listAcc.length > 0 &&
                    listAcc.map((acc, index) => {
                        if (index >= numAcc) {
                            return;
                        }
                        return <AccountItem key={acc.id} data={acc} />;
                    })}
            </>
        );
    };

    return (
        <div className={className}>
            <HandleListAcc numAcc={numAcc} />
            <div className={cx('text-more')}>
                {more ? <p onClick={handleLess}>See less</p> : <p onClick={handleAll}>See All</p>}
            </div>
        </div>
    );
}

export default SuggestAccounts;
