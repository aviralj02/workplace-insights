import { auth } from "@/auth";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const session = await auth();

  if (!session?.user) return null;

  return <div>{session?.user?.userName}</div>;
};

export default Dashboard;
