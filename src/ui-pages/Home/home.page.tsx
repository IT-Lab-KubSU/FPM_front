"use client";
import { apolloClient } from "@/apolloClient";
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
import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";
import { CookiesProvider } from "react-cookie";

export const HomePage = (): ReactElement => {
  return (
    <>
      <CookiesProvider>
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
      </CookiesProvider>
    </>
  );
};
