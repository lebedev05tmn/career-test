import { useEffect, useState, type FC } from 'react';
import { Layout } from '../Layout';
import { useParams } from '@vkontakte/vk-mini-apps-router';
import { useDataTestStore, useTestStore } from './store';
import { Button, Caption, Headline, Paragraph } from '@vkontakte/vkui';
import { useComletedTestStore } from '../../../modules/Profile';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import axios from 'axios';
import { useUserStore } from '../../../modules/Profile/store';

const Test: FC = () => {
    const params = useParams<'id'>();
    const getData = useDataTestStore((state) => state.getData);
    const data = useDataTestStore((state) => state.data);
    const completed = useTestStore((state) => state.questions);
    const onComplete = useTestStore((state) => state.completeQuestion);
    const increment = useComletedTestStore((state) => state.incrementCounter);
    const profile = useUserStore((state) => state.profile);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(1);

    useEffect(() => {
        if (params?.id) {
            getData(params.id);
            const currentCompleted = completed[params.id]?.length || 1;
            setCurrentQuestionIndex(currentCompleted);
        }
    }, [completed, getData, params?.id]);

    if (!params?.id) return <></>;

    const testData = data[params.id];

    const addRow = async (name: string, age: string, sex: string, result: string) => {
        try {
            await axios.post(
                'https://sheetdb.io/api/v1/ydbimdon3n4a4',
                {
                    data: [
                        {
                            id: 'INCREMENT',
                            name: name,
                            age: age,
                            sex: sex,
                            result: result,
                        },
                    ],
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            );
        } catch (error) {
            console.error('Error adding row:', error);
        }
    };

    ChartJS.register(ArcElement, Tooltip, Legend);

    if (!testData) return <></>;

    const counts = completed[params.id]?.reduce(
        (acc, item: number) => {
            if (item) {
                acc[item] = (acc[item] || 0) + 1;
            }
            return acc;
        },
        {} as Record<number, number>,
    );

    const maxEntry = counts
        ? Object.entries(counts)?.reduce<[number | null, number]>(
              (max, entry) => {
                  const currentValue = Number(entry[0]);
                  return entry[1] > max[1] ? [currentValue, entry[1]] : max;
              },
              [null, -Infinity],
          )
        : 0;

    const result = testData?.keys.find((item) => item.key === (maxEntry as [number, number])[0]);

    const handleAnswerClick = async (itemKey: number) => {
        if (!testData || !currentQuestionIndex) return;

        onComplete(params.id ?? '', testData.questions[currentQuestionIndex - 1], itemKey);

        if (testData.questions.length > currentQuestionIndex + 1) {
            setCurrentQuestionIndex((prev) => (prev !== null ? prev + 1 : null));
        } else {
            setCurrentQuestionIndex(null);
            increment();
            if (result)
                await addRow(
                    profile?.name as string,
                    String(profile?.age),
                    profile?.sex as string,
                    result?.name,
                );
        }
    };

    return (
        <Layout title="Тест">
            {currentQuestionIndex !== null &&
            completed[params?.id]?.length !== testData?.questions.length ? (
                <div className="bg-[#232324] pt-2 pl-2">
                    <Paragraph>
                        Вопрос {currentQuestionIndex} из {testData?.questions.length}
                    </Paragraph>
                    <div className="flex flex-col items-center">
                        <p className="mb-[27px] mt-[27px]">
                            {testData?.questions[currentQuestionIndex - 1]?.title ??
                                'Что вы выберите?'}
                        </p>
                        <div className="flex gap-4 bg-[#363738] p-10 rounded-2xl mb-[30vh]">
                            {testData?.questions[currentQuestionIndex - 1]?.variants.map(
                                (item, index) => (
                                    <Button
                                        className="min-h-12 flex-1"
                                        key={item.title}
                                        onClick={() =>
                                            handleAnswerClick(
                                                item.key ??
                                                    (index === 0
                                                        ? (testData?.questions[
                                                              currentQuestionIndex - 1
                                                          ]?.key as number)
                                                        : 0),
                                            )
                                        }>
                                        <span className="text-wrap">{item.title}</span>
                                    </Button>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-10 mb-10">
                    <p>{result?.fullname ?? result?.name}</p>
                    <Doughnut
                        data={{
                            labels: testData?.keys.map((item) => item.fullname ?? item.name),
                            datasets: [
                                {
                                    label: 'Сходства с профессией',
                                    data: Object.values(
                                        completed[params.id].reduce(
                                            (acc, item: number) => {
                                                if (item) {
                                                    acc[item] = (acc[item] || 0) + 1;
                                                }
                                                return acc;
                                            },
                                            {} as Record<number, number>,
                                        ),
                                    ),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(0, 200, 132, 1)',
                                        'rgba(0, 0, 235, 1)',
                                        'rgba(25, 221, 826, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 55, 1)',
                                        'rgba(255, 15, 4, 1)',
                                    ],
                                },
                            ],
                        }}
                    />
                    <ul className="p-2 flex flex-col gap-2">
                        {testData.keys.map((item) => (
                            <li>
                                {item.name && <Headline level="1">{item?.fullname}</Headline>}
                                {item.description && (
                                    <Caption className="text-xs">{item?.description}</Caption>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Layout>
    );
};

export default Test;
