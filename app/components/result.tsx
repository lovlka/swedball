import { Card } from "@radix-ui/themes";

export default function Result({ result }: { result: object | null }) {
  return result && (
    <Card>
      {JSON.stringify(result)}
    </Card>
  );
}
