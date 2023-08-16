import TeacherCard from "@/modules/Teachers/TeacherCard";
import Slider from "@/components/Slider/Slider";


export default function Teachers({teachers}: { teachers: ITeacherDTO[] }) {
    return <div className="container mb-8 mx-auto px-12">
        <Slider title={"Ведущие преподаватели"}>
            {teachers.map((teacher, index) => <>
                <TeacherCard teacher={teacher}/>
            </>)}
        </Slider>
    </div>
}