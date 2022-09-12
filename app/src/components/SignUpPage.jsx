import useDidMountEffect from "../hooks/useDidMountEffect";
import SignUp from "./SignUp";

function SignUpPage() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(true); // Method to toggle modal
  // useDidMountEffect(setIsSignUpOpen(true, []));

  return <>{isSignUpOpen && <SignUp setIsSignUpOpen={setIsSignUpOpen} />}</>;
}
export default SignUpPage;
