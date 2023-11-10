import React, { HTMLAttributes, useState } from 'react';
import SubscriptionCompletionForm from 'components/forms/SubscriptionCompletionForm';
import Card from 'components/commons/Card';
import SignUpMobileIllustration from 'public/img/illustration-sign-up-mobile.svg';
import SignUpDesktopIllustration from 'public/img/illustration-sign-up-desktop.svg';
import NewsletterSignUpForm from 'components/forms/NewsletterSignUpForm';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const NewsletterSignUpContainer: React.FC<IProps> = ({ children, ...props }) => {
    const [email, setEmail] = useState<string>('');

    const onNewsletterSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = (event.target as any)?.email?.value;
        setEmail(email);
    };

    const onSubscriptionCompletionSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmail('');
    };

    return (
        <>
            {!email ? (
                <Card head={{
                    mobile: <SignUpMobileIllustration />,
                    desktop: <SignUpDesktopIllustration />,
                }}>
                    <NewsletterSignUpForm onSubmit={onNewsletterSignUpSubmit} />
                </Card>
            ) : (
                <Card>
                    <SubscriptionCompletionForm email={email}
                                                onSubmit={onSubscriptionCompletionSubmit}
                    />
                </Card>
            )}
        </>
    );
};

export default NewsletterSignUpContainer;
