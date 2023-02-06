// import Link from "next/link";
// import { Container, Main, Title, Description } from "../componets/sharedstyles";

import UsersList from "../componets/complex/user-list";
import { Layout } from "../componets/containers/layout";

export default function About() {
  return (
    <Layout>
      <UsersList />
    </Layout>
  );
}
