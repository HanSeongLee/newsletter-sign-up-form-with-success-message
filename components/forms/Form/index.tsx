import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Paragraph, Title } from 'components/commons/Typography';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    title: string;
    description: string;
    extra?: React.ReactNode;
}

const Form: React.FC<IProps> = ({
                                    title, description, extra, className,
                                    children, ...props
                                }) => {
    return (
        <form className={cn(styles.form, className)}
              {...props}
        >
            <div className={styles.head}>
                <Title level={2}>
                    {title}
                </Title>
                <Paragraph>
                    {description}
                </Paragraph>
                {extra}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </form>
    );
};

export default Form;
