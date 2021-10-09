import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.auth, authProvider);
  }

  logout() {
    signOut(this.auth);
  }

  onAuthChange(onUserChange) {
    onAuthStateChanged(this.auth, (user) => onUserChange(user));
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`Not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
