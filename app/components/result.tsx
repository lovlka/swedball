import { Card } from "@radix-ui/themes";

export default function Result({ result }: { result: object | null }) {
  return result && (
    <Card>
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
    </Card>
  );
}
