"use client";

import { type PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@radix-ui/themes";

export default function SubmitButton({ children }: PropsWithChildren) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      {children}
    </Button>
  );
}
