export const schoolList = [
  {
    'schoolId': 'schoolId',
    'schoolName': 'Test School',
    'schoolLogoUrl': 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    'schoolCity': 'Sofia',
    'schoolRegion': 'Slatina',
    'schoolAddress': '123 Main St',
    'schoolPhone': '1234567890',
    'schoolEmail': 'email@email.com',
    'officeCoordinates': {
      'lat': 42.6977,
      'lng': 23.3219
    },
    'regionsServed': [
      'Slatina',
      'Mladost'
    ],
    'schoolAdmin': 'adminId'
  }
];

export const catalogListMock = [
  {
    media: 'https://images.pexels.com/photos/7433/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Иванов',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Всички',
    value: 2
  },
  {
    media: 'https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Петров',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Слатина, Средец',
    value: 4
  },
  {
    media: 'https://images.pexels.com/photos/543602/pexels-photo-543602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Автошкола Георгиев',
    categories: ['AM', 'A', 'A1', 'A2'],
    location: 'Всички',
    value: 5
  },
  {
    media: 'https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Димитров',
    categories: ['B1', 'B', 'BA'],
    location: 'Всички',
    value: 4
  },
  {
    media: 'https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Loft design',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Всички',
    value: 5
  },
  {
    media: 'https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Гечев',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Всички',
    value: 4.5
  },
];

export const FAQ = [
  {
    title: 'Как да избера школа?',
    content: [
      {
        title: 'На какво трябва да обърна внимание',
        subtitle:
          'Оборудване, автомобилен парк и инструктори. Отзивите на останалите курсисти могат да ти помогнат. Увери се, че цената отговаря на качеството на обучението и че графикът е съвместим с твоя.'
      },
    ]
  },
  {
    title: 'Кога мога да започна?',
    content: [
      {
        title: 'На колко години мога да започна курс категория В?',
        subtitle: 'Можеш да започнеш шофьорски курс на 17 години и 9 месеца, но правоспособността се придобива на 18 години.'
      },
      {
        title: 'Какво е необходимо, за да мога да започна курс?',
        subtitle: 'Трябва да си навършил минималната възраст от 17, да имаш медицинско свидетелство за годност и да предоставиш лични документи за самоличност.'
      },
    ]
  },
  {
    title: 'Какво трябва да знам, за да започна курсове за автомобил?',
    content: [
      {
        title: 'Как преминава курса на обучение за водачи на МПС категория В?',
        subtitle:
          'Обучението за категория В включва теоретична подготовка и практическо управление на МПС. След завършване на курса, кандидатите се явяват на изпити за теория и практика.',
      },
    ]
  }
];

export const schoolMock = {
  id: 1,
  logoUrl: 'https://drive-school.eu/wp-content/uploads/2022/01/logo_OK.png',
  name: 'Автошкола Driving School - Граматикови',
  images: [
    'https://drive-school.eu/wp-content/uploads/2017/10/img-03.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/01.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/06.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/07.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/09.jpg',
  ],
  address: {
    city: 'София',
    region: 'Витоша',
    street: 'бул. “Цар Борис III” 365',
  },
  description:
    'Автошкола Driving School - Граматикови e създадена преди повече от 25 години. Сформиралият се с времето екип от висококвалифицирани преподаватели с дългогодишен професионален опит гарантира качествено и отлично обучение. Ние намираме индивидуален подход към всеки от клиентите си, с цел по–лесно и бързо изучаване на материала.',
  whyUs: [
    'Съвременнен кабинет със система за видео наблюдение и мултимедийно обучение, с което отговаря на всички европейски изисквания за теоретична подготовка.',
    'Eкип от висококвалифицирани преподаватели с дългогодишен професионален опит гарантира качествено и отлично обучение',
    'Автомобили  отлично техническо състояние, за което се грижат механиците в собствения ни сервиз'
  ],
  regionsServed: ['Витоша', 'Младост', 'Студентски'],
  categoriesServed: ['A', 'B'],
  email: 'info@drive-school.eu',
  phone: '+359888237935',
  reviews: [
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { fullName: 'Елена Иванова', date: '2023-01-25', reviewScore: 5, review: 'Най-добрите!' },
    { fullName: 'Елена Иванова', date: '2023-01-25', reviewScore: 5, review: 'Най-добрите!' },
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 3, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
  ],
  courses: [{
    categoryName: 'A',
    hoursTheory: '4',
    hoursPractice: '20',
    examTheoryInternalPrice: 'Безплатен',
    examPracticeInternalPrice: 'Безплатен',
    examTheoryExternalPrice: '80',
    examPracticeExternalPrice: '80',
    coursePrice: '600',
  },
  {
    categoryName: 'B',
    hoursTheory: '40',
    hoursPractice: '36',
    examTheoryInternalPrice: 'Безплатен',
    examPracticeInternalPrice: 'Безплатен',
    examTheoryExternalPrice: '80',
    examPracticeExternalPrice: '80',
    coursePrice: '1100',
  }],
  ratingScore: 4.4,
  ratingCount: 77,
};