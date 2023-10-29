import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    type: 'default' | 'danger';
    size?: 'small' | 'normal';
    strong?: boolean;
}

const Text: React.FC<IProps> = ({
                                    type, size = 'normal', strong, children,
                                    className, ...props
                                }) => {
    return (
        <span className={cn(styles.text, {
            [styles.danger]: type === 'danger',

            [styles.small]: size == 'small',

            [styles.strong]: strong,
        })}
              {...props}
        >
            {children}
        </span>
    );
};

export default Text;
