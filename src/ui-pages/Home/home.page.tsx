import {CONSTANTS} from "@/app/constants";
import SnakeText from "@/features/SnakeText/SnakeText";
import {AboutUs, Directions, Footer, Header, Intro, LeedFormWithMap, News, Partners, Stats} from "@/widgets";
import {SubtitleLayout} from "@/entities";

export const HomePage = () => {
    return (<>
        <Header/>
        <Intro/>

        <Stats stats={CONSTANTS.stats}/>

        <SnakeText text={" мы выпускаем квалифицированных специалистов"} mainText={"50лет"}/>

        <SubtitleLayout text={"Направления подготовки"}>
            <Directions directions={CONSTANTS.directions}/>
        </SubtitleLayout>

        <SubtitleLayout text={"О факультете"}>
            <AboutUs/>
        </SubtitleLayout>

        <SubtitleLayout text={"Новости"}>
            <News news={CONSTANTS.news}/>
        </SubtitleLayout>

        {/*<Subtitle text={"Образовательные программы обучения"}/>*/}
        {/*<SubtitleLayout text={"Ведущие преподаватели"}>*/}
        {/*    <Teachers teachers={teachers}/>*/}
        {/*</SubtitleLayout>*/}

        {/*<Subtitle text={"Образовательные программы обучения"}/>*/}
        {/*<Subtitle text={"Образовательные программы обучения"}/>*/}

        <LeedFormWithMap/>
        <Partners partners={CONSTANTS.partners}/>
        <Footer/>
    </>)
}