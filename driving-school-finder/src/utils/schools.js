import { REGIONS } from 'CONSTANTS';

export const matchSchoolsWithRatings = (schools, ratings) => {
  try {
    schools.forEach(school => {
      const correspondingRating = ratings.find(r => r.schoolId === school.ownerUid);
      if (correspondingRating) {
        school.ratingScore = correspondingRating.ratingScore || 0;
        school.reviewsCount = correspondingRating.reviewsCount || 0;
      } else {
        school.ratingScore = 0;
        school.reviewsCount = 0;
      }

      //Fix regionsServed if needed
      if (school.regionsServed.length >= REGIONS.length) {
        school.regionsServed = ['Всички'];
      }

    });

    return schools;
  } catch (error) {
    throw Error(error);
  }
};

export const sortDesc = (schools, sortBy) => {
  try {
    schools.sort((a, b) => b[sortBy] - a[sortBy]);
    return schools;
  } catch (error) {
    throw Error(error);
  }
};