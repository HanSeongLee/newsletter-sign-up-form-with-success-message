import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    head: ReactNode;
}

const Card: React.FC<IProps> = ({ head, children, className, ...props }) => {
    return (
        <div className={cn(styles.card, className)}>
            {head && (
                <div className={styles.head}>
                    {head}
                </div>
            )}
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export default Card;
