import type { NextPage } from "next";
import Head from "next/head";
import { Text, Container, Row } from "@nextui-org/react";

import styles from "../styles/Home.module.css";

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const genRandomPrettyColor = () =>
  `hsl(${randomInt(0, 360)},${randomInt(42, 98)}%,${randomInt(40, 90)}%)`;

type PropsType = { tgPath: string };

const Home: NextPage<PropsType> = ({ tgPath }: PropsType) => {
  const textGradient = tgPath;

  return (
    <Container>
      <Head>
        <title>Personal site of Andre</title>
        <meta name="description" content="Home" />
      </Head>

      <main className={styles.container}>
        <Row>
          <Text
            h1
            size={60}
            css={{
              textGradient,
              lineHeight: 1,
            }}
            weight="bold"
          >
            Andre's space for this and that
          </Text>
        </Row>
        <Row>
          <p className={styles.description}>
            My name is Andre, currently I'm building this to site for my blog
            and small experiments
          </p>
        </Row>
      </main>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      tgPath: `45deg, ${genRandomPrettyColor()} -20%, ${genRandomPrettyColor()} 50%`,
    },
  };
}

export default Home;
