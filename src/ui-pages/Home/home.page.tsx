import {CONSTANTS} from "@/app/constants";
import SnakeText from "@/features/SnakeText/SnakeText";
import {AboutUs, Directions, Footer, Header, Intro, LeedFormWithMap, News, Partners, Stats} from "@/widgets";

export const HomePage = () => {
    return (<>
        <Header/>
        <Intro/>
        <Stats stats={CONSTANTS.stats}/>
        <SnakeText text={" мы выпускаем квалифицированных специалистов"} mainText={"50лет"}/>
        <Directions directions={CONSTANTS.directions}/>
        <News news={CONSTANTS.news}/>
        <LeedFormWithMap/>
        <Partners partners={CONSTANTS.partners}/>
        {/*<AboutUs/>*/}
        <Footer/>
    </>)
}