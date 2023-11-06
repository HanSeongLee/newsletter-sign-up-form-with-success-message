import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    head?: {
        mobile: ReactNode;
        desktop: ReactNode;
    };
}

const Card: React.FC<IProps> = ({ head, children, className, ...props }) => {
    return (
        <div className={cn(styles.card, className)}>
            {head && (
                <div className={styles.head}>
                    <div className={styles.mobile}>
                        {head.mobile}
                    </div>
                    <div className={styles.desktop}>
                        {head.desktop}
                    </div>
                </div>
            )}
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export default Card;
