"use client";
import { CONSTANTS } from "@/app/constants";
import { SnakeText } from "@/features";
import {
  Directions,
  Footer,
  Header,
  Intro,
  LeedFormWithMap,
  News,
  Partners,
  Stats,
} from "@/widgets";
import { ReactElement } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/apolloClient";

export const HomePage = (): ReactElement => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Intro />
        <Stats stats={CONSTANTS.stats} />
        <SnakeText
          text={" мы выпускаем квалифицированных специалистов"}
          mainText={"50лет"}
        />
        <Directions directions={CONSTANTS.directions} />
        <News />
        <LeedFormWithMap />
        <Partners partners={CONSTANTS.partners} />
        {/*<AboutUs/>*/}
        <Footer />
      </ApolloProvider>
    </>
  );
};
