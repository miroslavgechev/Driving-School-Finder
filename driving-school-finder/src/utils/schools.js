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

export const filterSchools = (schools, filter) => {

  if (!schools || !filter) {
    return;
  }

  const { name, category, rating, region } = filter;

  const filteredSchools = schools?.filter((school) => {
    let isNameMatch = true;
    let isCategoryMatch = true;
    let isRatingMatch = true;
    let isRegionMatch = true;

    if (name) {
      isNameMatch = school.name.toLowerCase().includes(name.toLowerCase());
    }

    if (!category || category === 'Всички') {
      isCategoryMatch = true;
    } else {
      isCategoryMatch = school.categoriesServed.includes(category);
    }

    if (!rating || rating.label === 'Всички') {
      isRatingMatch = true;
    } else {
      isRatingMatch = school.ratingScore >= rating.rating;
    }

    if (!region || region === 'Всички') {
      isRegionMatch = true;
    } else {
      isRegionMatch = school.regionsServed.includes(region) || school.regionsServed.includes('Всички');
    }

    return isNameMatch && isCategoryMatch && isRatingMatch && isRegionMatch;
  });

  return filteredSchools;
};

export const sortDesc = (schools, sortBy) => {
  try {
    schools.sort((a, b) => b[sortBy] - a[sortBy]);
    return schools;
  } catch (error) {
    throw Error(error);
  }
};