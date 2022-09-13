import useDidMountEffect from "../hooks/useDidMountEffect";
import SignUp from "./SignUp";

function SignUpPage() {
  const [isSignUpOpen, setIsModalOpen] = useState(true); // Method to toggle modal
  // useDidMountEffect(setIsModalOpen(true, []));

  return <>{isSignUpOpen && <SignUp setIsModalOpen={setIsModalOpen} />}</>;
}
export default SignUpPage;
