const init = {
  fullname: "",
  userName: "",
  email: "",
  avatar_url: "",
  bio: "",
};

function userReducer(state = init, action) {
  //action adalah event yang terjadi
  if (action.type == "login") {
    return {
      ...state,
      id: action.payload.id,
      fullName: action.payload.fullName,
      userName: action.payload.userName,
      email: action.payload.email,
      avatar_url: action.payload.avatar_url,
      bio: action.payload.bio,
    };
  } else if (action.type == "logout") {
    return init;
  }
  // console.log(state);
  return state;
}

export default userReducer;
