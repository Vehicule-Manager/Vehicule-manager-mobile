import React from 'react';
import { ApiProvider } from './src/feature/loginApi/ApiContext';
import AppNavigator from './src/index';

export default function App() {
    return (
        <ApiProvider>
            <AppNavigator />
        </ApiProvider>
    );
}
