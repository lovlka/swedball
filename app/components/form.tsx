"use client";

import { useState } from "react";
import { fetchUser } from "../actions/dummy-api";
import { Box } from "@radix-ui/themes";
import SubmitButton from "./submit-button";

export default function Form() {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<any>(null);

  const handleSubmit = async () => {
    const user = await fetchUser(userId);
    setUser(user);
    setUserId(userId + 1);
  };

  return (
    <form action={handleSubmit}>
      <SubmitButton>Fetch user</SubmitButton>
      {user && (
        <Box>
          {JSON.stringify(user)}
        </Box>
      )}
    </form>
  );
}
