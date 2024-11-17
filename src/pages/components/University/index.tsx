import type { FC } from 'react';
import { Layout } from '../Layout';
import { Card } from '@vkontakte/vkui';
import Table from '../../../components/Table';

const University: FC = () => {
    return (
        <Layout title="Университеты">
            <Card className="pt-[30px] pb-[30px] mt-4">
                <Table />
            </Card>
        </Layout>
    );
};

export { University };
