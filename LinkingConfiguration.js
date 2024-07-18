// LinkingConfiguration.js
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/"), "doctorappointmentapp://"],
  config: {
    screens: {
      SignIn: "signin",
      SignUp: "signup",
      OAuthRedirect: "oauth/redirect",
    },
  },
};
