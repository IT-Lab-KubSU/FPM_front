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

export const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <Intro />
      <Stats stats={CONSTANTS.stats} />
      <SnakeText
        text={" мы выпускаем квалифицированных специалистов"}
        mainText={"50лет"}
      />
      <Directions directions={CONSTANTS.directions} />
      <News news={CONSTANTS.news} />
      <LeedFormWithMap />
      <Partners partners={CONSTANTS.partners} />
      {/*<AboutUs/>*/}
      <Footer />
    </>
  );
};
