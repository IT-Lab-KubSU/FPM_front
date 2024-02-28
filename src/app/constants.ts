import dirImg from "../../public/diractions.svg";

const directions = [
  {
    buttonText: "Бакалавриат",
    directions: [
      {
        title: "Прикладная математика и информатика",
        code: "01.03.02",
        forms: ["Очная"],
        subjects: ["Математика", "Информатика и ИКТ", "Русский язык"],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
      {
        title: "Математическое обеспечение и системное администрирование",
        code: "02.03.03",
        forms: ["Очная"],
        subjects: ["Математика", "Информатика и ИКТ", "Русский язык"],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
      {
        title: "Фундаментальная информатика и информационные технологии",
        code: "02.03.02",
        forms: ["Очная"],
        subjects: ["Математика", "Информатика и ИКТ", "Русский язык"],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
      {
        title: "Прикладная информатика",
        code: "09.03.03",
        forms: ["Очная"],
        subjects: ["Математика", "Информатика и ИКТ", "Русский язык"],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
    ],
  },
  {
    buttonText: "Магистратура",
    directions: [
      {
        title: "Прикладная математика и информатика",
        code: "01.04.02",
        forms: ["Очная"],
        subjects: [],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
      {
        title: "Фундаментальная информатика и информационные технологии",
        code: "02.04.02",
        forms: ["Очная", "Очно-заочная"],
        subjects: [],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
      {
        title: "Информационные системы и технологии",
        code: "09.04.02",
        forms: ["Очная", "Очно-заочная"],
        subjects: [],
        text: "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
        image: dirImg,
      },
    ],
  },
];
const news = [
  {
    title: "Открытие Нового Учебного Года в КубГУ",
    text: "Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/jc6e5qzroyw.jpg?itok=zjJ0cVMU",
    date: 1679827200000,
  },
  {
    title: "КубГУ Занял Первое Место в Рейтинге Вузов Региона",
    text: "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/1_1_4.jpg?itok=M7JWL4bD",
    date: 1679913600000,
  },
  {
    title: "Студенты КубГУ Победили на Олимпиаде по Математике",
    text: "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692963732.jpeg?itok=SDbPz9oT",
    date: 1680000000000,
  },
  {
    title:
      "КубГУ Открывает Новую Специализацию в Области Искусственного Интеллекта",
    text: "Университет КубГУ представляет новую программу обучения, посвященную искусственному интеллекту и машинному обучению.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692965859.jpeg?itok=RvJBo-1x",
    date: 1680086400000,
  },
  {
    title: "Студенты КубГУ Организовали Благотворительный Базар",
    text: "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/img_9366_2.jpg?itok=bTiCR-6V",
    date: 1680172800000,
  },
  {
    title:
      "Исследование Профессоров КубГУ Помогло Развить Новый Лекарственный Препарат",
    text: "Научное исследование, проведенное профессорами КубГУ, сыграло ключевую роль в разработке эффективного лекарственного препарата от редкого заболевания.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/jc6e5qzroyw.jpg?itok=zjJ0cVMU",
    date: 1680259200000,
  },
  {
    title: "Стартап, Созданный Студентами КубГУ, Получил Инвестиции",
    text: "Команда студентов Университета КубГУ, занимающаяся разработкой инновационного стартапа, привлекла значительные инвестиции для развития проекта.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/1_1_4.jpg?itok=M7JWL4bD",
    date: 1680345600000,
  },
  {
    title: "КубГУ Проводит Онлайн-Мастеркласс по Астрономии для Школьников",
    text: "Университет КубГУ организовал серию онлайн-мастерклассов по астрономии, чтобы познакомить школьников с увлекательным миром космоса.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692963732.jpeg?itok=SDbPz9oT",
    date: 1680432000000,
  },
  {
    title: "КубГУ Завоевал Первое Место на Спортивной Олимпиаде Студентов",
    text: "Спортивная команда Университета КубГУ стала победителем на межвузовской спортивной олимпиаде, продемонстрировав отличные результаты.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692965859.jpeg?itok=RvJBo-1x",
    date: 1680518400000,
  },
  {
    title: "Выпускник КубГУ Награжден Премией за Вклад в Область Искусства",
    text: "Бывший студент Университета КубГУ получил престижную премию за свой выдающийся вклад в развитие современного искусства.",
    image:
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/img_9366_2.jpg?itok=bTiCR-6V",
    date: 1680604800000,
  },
];

const partners = [
  {
    title: "ТИНЬКОФФ",
    image:
      "https://acdn.tinkoff.ru/static/documents/d6400f9d-63bb-4076-b887-7aa967baf8a9.svg",
  },
  {
    title: "ПРОДОКТОРОВ",
    image: "https://prodoctorov.ru/static/img/PD_big2.png",
  },
  {
    title: "ГАЗПРОМ",
    image:
      "https://companieslogo.com/img/orig/GAZP.ME-56a2073a.png?t=1593293052",
  },
  {
    title: "РОСНЕФТЬ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Rosneft_201x_logo.svg/2560px-Rosneft_201x_logo.svg.png",
  },
  {
    title: "ГАЗПРОМ",
    image:
      "https://companieslogo.com/img/orig/GAZP.ME-56a2073a.png?t=1593293052",
  },
  {
    title: "МТС",
    image: "https://moskva.mts.ru/upload/images/logo/new/mts_logo_cmyk.png",
  },
  {
    title: "Сбербанк",
    image: "https://free-png.ru/wp-content/uploads/2020/09/icon_sber-01.png",
  },
  {
    title: "Тандер",
    image:
      "https://tmsearch.onlinepatent.ru/images/94f/94f6321a-b1f9-48a5-9817-2a76ef40151f.jpg",
  },
];
const stats = [
  {
    text: "Направления",
    value: 4,
  },
  {
    text: "Студентов",
    value: 1200,
  },
  {
    text: "Партнеров",
    value: 25,
  },
  {
    text: "Средняя ЗП",
    value: 80000,
  },
];
const departments = [
  {
    slug: "kit",
    title: "Кафедра информационных технологий",
    text: "Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.Сегодня в Университете КубГУ состоялось официальное открытие нового учебного года. Ректор приветствовал студентов и пожелал успешной учебы.",
    image: [
      "https://sun9-2.userapi.com/impg/ufrOU7GHOpiohTyEFdkSQjkjfEMslSD-P-K0_w/kyRVk0jQPvA.jpg?size=2560x1352&quality=95&sign=e8740c4c563c9e75bdb70bf333c7e678&type=album",
    ],
    advantages: [
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    ],
    task: [
      {
        name: "Кот в мешке",
        description:
          "Вы — университетский тренер. Всего в университете под Вашим надзором n студентов, умение программировать i-го студента равно ai.\n" +
          "\n" +
          "Вы хотите составить команду для нового соревнования по программированию. Как Вы знаете, чем больше студентов на соревновании — тем больше шансов победить! Поэтому Вы хотите составить максимальную по количеству студентов команду. Но Вы также знаете, что команда должна быть сбалансированной. Это означает, что умение программировать каждой пары студентов в команде должно отличаться не более, чем на 5.\n" +
          "\n" +
          "Ваша задача — найти максимально возможное количество студентов в сбалансированной команде.\n" +
          "\n" +
          "Реальный пример входных данных: [0, 0, 0, 0, 0, 0]\nИскуственный пример: [10, 27, 5, 2, 1, 10, 19, 48, 15, 10, 7, 33, 89]\n\nПопробуй решить оба варианта и не смотри в ответ пока не решишь)",
      },
    ],
  },
  {
    slug: "kmm",
    title: "КубГУ Занял Первое Место в Рейтинге Вузов Региона",
    text: "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
    image: [
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/1_1_4.jpg?itok=M7JWL4bD",
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/jc6e5qzroyw.jpg?itok=zjJ0cVMU",
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692963732.jpeg?itok=SDbPz9oT",
    ],
    advantages: [
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    ],
    task: [
      {
        name: "Кот в мешке",
        description:
          "Вы — университетский тренер. Всего в университете под Вашим надзором n студентов, умение программировать i-го студента равно ai.\n" +
          "\n" +
          "Вы хотите составить команду для нового соревнования по программированию. Как Вы знаете, чем больше студентов на соревновании — тем больше шансов победить! Поэтому Вы хотите составить максимальную по количеству студентов команду. Но Вы также знаете, что команда должна быть сбалансированной. Это означает, что умение программировать каждой пары студентов в команде должно отличаться не более, чем на 5.\n" +
          "\n" +
          "Ваша задача — найти максимально возможное количество студентов в сбалансированной команде.\n" +
          "\n" +
          "Реальный пример входных данных: [0, 0, 0, 0, 0, 0]\nИскуственный пример: [10, 27, 5, 2, 1, 10, 19, 48, 15, 10, 7, 33, 89]\n\nПопробуй решить оба варианта и не смотри в ответ пока не решишь)",
      },
    ],
  },
  {
    slug: "kpm",
    title: "Студенты КубГУ Победили на Олимпиаде по Математике",
    text: "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
    image: [
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692963732.jpeg?itok=SDbPz9oT",
    ],
    advantages: [
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    ],
    task: [
      {
        name: "Кот в мешке",
        description:
          "Вы — университетский тренер. Всего в университете под Вашим надзором n студентов, умение программировать i-го студента равно ai.\n" +
          "\n" +
          "Вы хотите составить команду для нового соревнования по программированию. Как Вы знаете, чем больше студентов на соревновании — тем больше шансов победить! Поэтому Вы хотите составить максимальную по количеству студентов команду. Но Вы также знаете, что команда должна быть сбалансированной. Это означает, что умение программировать каждой пары студентов в команде должно отличаться не более, чем на 5.\n" +
          "\n" +
          "Ваша задача — найти максимально возможное количество студентов в сбалансированной команде.\n" +
          "\n" +
          "Реальный пример входных данных: [0, 0, 0, 0, 0, 0]\nИскуственный пример: [10, 27, 5, 2, 1, 10, 19, 48, 15, 10, 7, 33, 89]\n\nПопробуй решить оба варианта и не смотри в ответ пока не решишь)",
      },
    ],
  },
  {
    slug: "kvt",
    title:
      "КубГУ Открывает Новую Специализацию в Области Искусственного Интеллекта",
    text: "Университет КубГУ представляет новую программу обучения, посвященную искусственному интеллекту и машинному обучению.",
    image: [
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/photo1692965859.jpeg?itok=RvJBo-1x",
    ],
    advantages: [
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    ],
    task: [
      {
        name: "Кот в мешке",
        description:
          "Вы — университетский тренер. Всего в университете под Вашим надзором n студентов, умение программировать i-го студента равно ai.\n" +
          "\n" +
          "Вы хотите составить команду для нового соревнования по программированию. Как Вы знаете, чем больше студентов на соревновании — тем больше шансов победить! Поэтому Вы хотите составить максимальную по количеству студентов команду. Но Вы также знаете, что команда должна быть сбалансированной. Это означает, что умение программировать каждой пары студентов в команде должно отличаться не более, чем на 5.\n" +
          "\n" +
          "Ваша задача — найти максимально возможное количество студентов в сбалансированной команде.\n" +
          "\n" +
          "Реальный пример входных данных: [0, 0, 0, 0, 0, 0]\nИскуственный пример: [10, 27, 5, 2, 1, 10, 19, 48, 15, 10, 7, 33, 89]\n\nПопробуй решить оба варианта и не смотри в ответ пока не решишь)",
      },
    ],
  },
  {
    slug: "kadii",
    title: "Студенты КубГУ Организовали Благотворительный Базар",
    text: "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    image: [
      "https://www.kubsu.ru/sites/default/files/styles/news_large/public/news/img_9366_2.jpg?itok=bTiCR-6V",
    ],
    advantages: [
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
      "Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности. Университет КубГУ стал лидером в рейтинге вузов региона по качеству образования и научной деятельности.",
      "Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.Команда студентов Университета КубГУ одержала победу на межрегиональной олимпиаде по математике, продемонстрировав высокий уровень подготовки.",
      "Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.Инициативная группа студентов Университета КубГУ провела благотворительный базар, собрав средства на помощь детям-сиротам.",
    ],
    task: [
      {
        name: "Кот в мешке",
        description:
          "Вы — университетский тренер. Всего в университете под Вашим надзором n студентов, умение программировать i-го студента равно ai.\n" +
          "\n" +
          "Вы хотите составить команду для нового соревнования по программированию. Как Вы знаете, чем больше студентов на соревновании — тем больше шансов победить! Поэтому Вы хотите составить максимальную по количеству студентов команду. Но Вы также знаете, что команда должна быть сбалансированной. Это означает, что умение программировать каждой пары студентов в команде должно отличаться не более, чем на 5.\n" +
          "\n" +
          "Ваша задача — найти максимально возможное количество студентов в сбалансированной команде.\n" +
          "\n" +
          "Реальный пример входных данных: [0, 0, 0, 0, 0, 0]\nИскуственный пример: [10, 27, 5, 2, 1, 10, 19, 48, 15, 10, 7, 33, 89]\n\nПопробуй решить оба варианта и не смотри в ответ пока не решишь)",
      },
    ],
  },
];

export const CONSTANTS = {
  directions,
  news,
  partners,
  stats,
  departments,
};
