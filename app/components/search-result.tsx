import { Card, DataList } from '@radix-ui/themes';
import { useAppSelector } from '@/state/hooks';

export default function SearchResult() {
  const result = useAppSelector((state) => state.search.result);

  return result && (
    <Card>
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
      {/*result.hits.map(hit => (
        <DataList.Root>
          {Object.entries(hit).map(([key, value]) => (
            <DataList.Item key={key}>
              <DataList.Label minWidth="80px" className="capitalize">
                {key}
              </DataList.Label>
              <DataList.Value>
                {typeof value === 'object' ? Object.values(value).join(', ') : value}
              </DataList.Value>
            </DataList.Item>
          ))}
        </DataList.Root>
      ))*/}
    </Card>
  );
}
