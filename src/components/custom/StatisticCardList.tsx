import { Card, CardContent } from '../ui/card';

const formatKey = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').trim();
};

function StatisticCardList({
  stats,
}: {
  stats?: Record<string, string | number>;
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(stats ?? {}).map(([key, value], index) => (
        <Card
          key={index}
          className=" bg-[#1f1f1f] text-white rounded-none border-0"
        >
          <CardContent className="px-6">
            <p className="uppercase text-sm text-gray-400 tracking-wide">
              {formatKey(key)}
            </p>
            <p className="text-4xl font-bold mt-2">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default StatisticCardList;
