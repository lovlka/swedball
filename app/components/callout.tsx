import { Callout as RadixCallout } from '@radix-ui/themes';

type Props = {
  icon?: JSX.Element;
  text: string;
};

export default function Callout({ icon, text }: Props) {
  return (
    <RadixCallout.Root color="red">
      <RadixCallout.Icon>
        {icon}
      </RadixCallout.Icon>
      <RadixCallout.Text>
        {text}
      </RadixCallout.Text>
    </RadixCallout.Root>
  );
}