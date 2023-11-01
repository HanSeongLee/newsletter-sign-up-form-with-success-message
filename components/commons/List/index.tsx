import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ListIcon from 'public/icons/icon-list.svg';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    items: string[];
}

const List: React.FC<IProps> = ({ items, className, ...props }) => {
    return (
        <ul className={cn(styles.list, className)}
            {...props}
        >
            {items.map((item, index) => (
                <li className={styles.item}
                    key={index}
                >
                    <div>
                        <ListIcon />
                    </div>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default List;
