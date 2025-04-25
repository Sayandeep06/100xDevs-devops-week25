
import { prismaClient } from "@repo/db/client";


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>
      "First name"
      {user?.username}
      <br/>
      "Password"
      {user?.password}
      <br />
      <div>
        Changed CICD pileline here 
      </div>
    </div>
  );
}
