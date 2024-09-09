import { Card } from '@radix-ui/themes';

type Props = {
  result: object | null;
};

export default function SearchResult({ result }: Props) {
  return (
    <Card>
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
    </Card>
  );
}
