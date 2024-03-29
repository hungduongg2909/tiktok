import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import { HeaderOnly } from '~/layouts';
import { useAuthStatus } from '~/hooks/useAuthStatus';
import Auth from '~/Auth';

function App() {
    useAuthStatus();
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout;
                        switch (route.layout) {
                            case null:
                                Layout = Fragment;
                                break;
                            case HeaderOnly:
                                Layout = HeaderOnly;
                                break;
                            default:
                                Layout = DefaultLayout;
                                break;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                        <Auth />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
