import { Card, DataList } from '@radix-ui/themes';
import { useAppSelector } from '@/state/hooks';

export default function SearchResult() {
  const result = useAppSelector((state) => state.search.result);

  return result && (
    <Card>
      <DataList.Root>
        {Object.keys(result).map((key) => {
          const value = result[key as keyof typeof result];
          return (
            <DataList.Item key={key}>
              <DataList.Label minWidth="80px" className="capitalize">
                {key}
              </DataList.Label>
              <DataList.Value>
                {typeof value === 'object' ? Object.values(value).join(', ') : value}
              </DataList.Value>
            </DataList.Item>
          );
        })}
      </DataList.Root>  
    </Card>
  );
}
