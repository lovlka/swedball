import { Card } from '@radix-ui/themes';
import { useAppSelector } from '@/state/hooks';

export default function SearchResult() {
  const result = useAppSelector((state) => state.search.result);

  return result && (
    <Card>
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
    </Card>
  );
}
