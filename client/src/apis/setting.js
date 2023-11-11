// const localApiUrl = "http://192.168.0.156:8000";

const appUrl = "http://localhost:5002";

const BaseSetting = {
  apiUrl: appUrl,
  siteName: "Link Connect",
  siteIcon: "",
  endpoint: {
    //login- sign up
    signUp: "/sign-up",

    //post apis
    getAllPost: "/getPost",
    uploadPost: "/uploadPost",
  },
};

export default BaseSetting;
