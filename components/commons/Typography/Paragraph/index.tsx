import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {

}

const Paragraph: React.FC<IProps> = ({ children, className, ...props }) => {
    return (
        <p className={cn(styles.paragraph, className)}
           {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
