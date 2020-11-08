import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MockedProvider } from "@apollo/client/testing";
import { aCafe } from './generated/graphql';
import { QUERY_CAFE_LIST } from './components/CafeList/query'

// afterEach(cleanup);

it("should render DOM as expected", () => {
    render(
        <MockedProvider>
            <App />
        </MockedProvider>
    )
})

it('when mocked, then should render loading state initially', () => {
    render(
        <MockedProvider mocks={[]}>
            <App />
        </MockedProvider>,
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
})

it.skip('given successful response, when mocked, then should render data', async () => {
    const mocks = [
        {
            request: { query: QUERY_CAFE_LIST, variables: {} },
            result: { data: { cafes: [ aCafe ] }, },
        },
    ];
    render(
        <MockedProvider mocks={mocks}>
            <App />
        </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve, 100)); // wait for response

    expect(screen.getByText(/Cafes/i)).toBeInTheDocument();
})


it.skip('given error, when mocked, then should render error', async () => {
    const mocks = [
        {
            request: { query: QUERY_CAFE_LIST, variables: {} },
            error: new Error("Something went wrong")
        },
    ];
    render(
        <MockedProvider mocks={mocks}>
            <App />
        </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve, 100)); // wait for response

    expect(screen.getByText(/ERROR/i)).toBeInTheDocument();
})