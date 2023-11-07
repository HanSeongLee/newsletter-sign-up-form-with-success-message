import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Form from 'components/forms/Form';
import Button from 'components/commons/Button';
import { Text } from 'components/commons/Typography';
import SuccessIcon from 'public/icons/icon-success.svg';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    email: string;
}

const SubscriptionCompletionForm: React.FC<IProps> = ({ email, ...props }) => {
    return (
        <Form className={styles.form}
              icon={<SuccessIcon />}
              title={'Thanks for subscribing!'}
              description={<>
                  A confirmation email has been sent to <Text type={'default'} strong>{email}</Text>. Please open it and click the button inside
                  to confirm your subscription.
              </>}
              {...props}
        >
            <Button>
                Dismiss message
            </Button>
        </Form>
    );
};

export default SubscriptionCompletionForm;
