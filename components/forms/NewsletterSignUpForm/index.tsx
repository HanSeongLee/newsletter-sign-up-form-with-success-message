import React, { FormHTMLAttributes, useState } from 'react';
import Form from 'components/forms/Form';
import Button from 'components/commons/Button';
import Input from 'components/commons/Input';
import List from 'components/commons/List';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {

}

const NewsletterSignUpForm: React.FC<IProps> = ({ ...props }) => {
    const [error, setError] = useState<string>('');
    const features = [
        'Product discovery and building what matters',
        'Measuring to ensure updates are a success',
        'And much more!',
    ];

    const handleEmailInvalid = () => {
        setError('Valid email required');
    };

    const handleEmailChange = () => {
        setError('');
    };

    return (
        <Form title={'Stay updated!'}
              description={'Join 60,000+ product managers receiving monthly updates on:'}
              extra={<List items={features} />}
              {...props}
        >
            <Input id={'email'}
                   name={'email'}
                   type={'email'}
                   label={'Email address'}
                   placeholder={'email@company.com'}
                   autoComplete={'email'}
                   onInvalid={handleEmailInvalid}
                   onChange={handleEmailChange}
                   error={error}
                   required
            />
            <Button>
                Subscribe to monthly newsletter
            </Button>
        </Form>
    );
};

export default NewsletterSignUpForm;
