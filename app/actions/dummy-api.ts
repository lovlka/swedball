'use server'
 
export async function fetchUser(userId: number) {
  const res = await fetch(`https://dummyapi.online/api/users/${userId}`);
  const data = await res.json();
  return data;
}