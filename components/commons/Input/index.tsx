import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import { Text } from 'components/commons/Typography';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<IProps> = ({
                                     label, error, id, className,
                                     ...props
                                 }) => {
    return (
        <div className={cn(styles.inputWrapper, {
            [styles.error]: error,
        }, className)}>
            <div className={styles.head}>
                {label && (
                    <label className={styles.label}
                           htmlFor={id}
                    >
                        <Text type={'default'}
                              size={'small'}
                              strong
                        >
                            {label}
                        </Text>
                    </label>)
                }
                {error && (
                    <Text type={'danger'}
                          size={'small'}
                          strong
                    >
                        {error}
                    </Text>
                )}
            </div>
            <input className={styles.input}
                   id={id}
                   {...props}
            />
        </div>
    );
};

export default Input;
