export const SET_PLANET_DATA = "SET_PLANET_DATA";
export const GET_PLANET_DATA ="GET_PLANET_DATA";

export const setPlanetData = id => {
  console.log(id)
  return {
    type: SET_PLANET_DATA,
    id
  };
};

export const getPlanetData = id => {
  
}