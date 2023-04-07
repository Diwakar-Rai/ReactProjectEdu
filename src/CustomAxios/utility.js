export const createRequestObject = ({ method, url, headers, postData }) => {
  return {
    method: method,
    url: url,
    headers: JSON.stringify({ accept: "*/*" }),
    body: JSON.stringify(postData),
  };
};

export const createHeaders = token => {
  const headers = { Authorization: `Bearer ${token}` };
  return headers;
};

export const setToken = token => {
  // console.log("in the set token function ");
  localStorage.setItem("token", token);
};
export const getToken = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return { status: true, token };
  } else {
    return { status: false };
  }
};

export const deleteToken = () => {
  if (localStorage.getItem("token") === null) {
    return false;
  } else {
    localStorage.removeItem("token");
  }
};
export const getUserRole = data => {
  return data.role;
};

export const getCourseById = (courses, courseId) => {
  return courses.find((course, index) => {
    return course._id == courseId;
  });
};
