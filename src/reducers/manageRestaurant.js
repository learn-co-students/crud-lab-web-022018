
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id++
      const restaurant = Object.assign({}, action.restaurant, { id: id })
      return { restaurants: state.restaurants.concat(restaurant) }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants };
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuidFn() });
      return Object.assign({}, state, {
        reviews: state.reviews.concat(review),
      });

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return Object.assign({}, state, { reviews });
    default:
      return state;
  }
};
