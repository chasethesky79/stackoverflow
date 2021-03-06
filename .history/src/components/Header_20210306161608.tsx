import React from 'react';
import { Helmet } from 'react-helmet';
import { HeaderWrapper, Title } from '../styled-components/styled-components';

export const Header = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Hello from React Helmet</title>
                <meta name='description' content='Basic Example'/>
            </Helmet>
            <HeaderWrapper>
                <Title>Q & A Feed</Title>
            </HeaderWrapper>
        </>
    )
} 