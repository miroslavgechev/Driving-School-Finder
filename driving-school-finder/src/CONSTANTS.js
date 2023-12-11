export const REGIONS = [
  'Банкя',
  'Витоша',
  'Връбница',
  'Възраждане',
  'Изгрев',
  'Илинден',
  'Искър',
  'Красна поляна',
  'Красно село',
  'Кремиковци',
  'Лозенец',
  'Люлин',
  'Младост',
  'Надежда',
  'Нови Искър',
  'Оборище',
  'Овча купел',
  'Панчарево',
  'Подуяне',
  'Сердика',
  'Слатина',
  'Средец',
  'Студентски',
  'Триадица'
];

export const CATEGORIES = ['A', 'A1', 'A2', 'AM', 'B', 'B1', 'BA'];

export const TABLE_SUBTITLES = {
  hoursTheory: 'Теория',
  hoursPractice: 'Практика',
  examTheoryInternalPrice: 'Изпит теория - вътрешен',
  examPracticeInternalPrice: 'Изпит практика - вътрешен',
  examTheoryExternalPrice: 'Изпит теория - ДАИ',
  examPracticeExternalPrice: 'Изпит практика - ДАИ',
  coursePrice: 'Цена на курса',
};

export const ERROR_MESSAGES = {
  emailTaken: 'Този имейл вече е регистриран',
  invalidCredentials: 'Данните за вход не са правилни',
  invalidCredential: 'Старата парола не е правилна',
  defaultError: 'Нещо се обърка, опитай отново!'
};

export const ERROR_CODES = {
  emailTaken: 'auth/email-already-in-use',
  invalidCredentials: 'auth/invalid-login-credentials',
  invalidCredential: 'auth/invalid-credential',
};

export const SUCCESS_STATES = {
  success: 'success',
  error: 'error',
  none: 'none',
};

export const USER_ROLES = {
  student: 'student',
  school: 'school',
};

export const ROUTES = {
  home: () => '/',
  schoolCatalogue: () => '/school/all',
  schoolDetails: (id) => `/school/${id}`,
  schoolDetailsWithParams: () => '/school/:id',
  schoolCreate: () => '/school/create',
  schoolEditWithParams: () => '/school/:id/edit',
  account: () => '/account',
  signin: () => '/signin',
  signup: () => '/signup',
  faq: () => '/faq',
  about: () => '/about',
  notFound: () => '/notfound',
};

export const COLLECTIONS = {
  schools: 'schools',
  users: 'users',
  ratings: 'ratings',
  allReviews: 'allReviews',
  faq: 'faq',
};

export const CUSTOM_ALERT_SEVERITY = {
  success: 'success',
  error: 'error',
};