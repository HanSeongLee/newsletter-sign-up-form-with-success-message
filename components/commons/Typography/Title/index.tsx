import React, { createElement, HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLTitleElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<IProps> = ({ level, children, className, ...props }) => {
    return createElement(`h${level}`, {
        className: cn(styles.title),
    }, children);
};

export default Title;
