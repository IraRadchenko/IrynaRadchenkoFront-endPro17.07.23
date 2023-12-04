import SignUpForm from './SignUpForm.jsx';

export default function SignUpPage() {
  const signUpFinish = values => {
    // ...
    console.log(values.name);
  }

  return (
    <div>
      <h2>Sign Up Page</h2>
      <SignUpForm finishSignUp={signUpFinish} />
    </div>
  )
}
