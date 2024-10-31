import type { FC } from 'react';
import TestPreview from '../../../modules/TestPreview/components';
import { Layout } from '../Layout';

const Home: FC = () => {
    return (
        <Layout title="Профориентация">
            <TestPreview />
        </Layout>
    );
};

export { Home };
