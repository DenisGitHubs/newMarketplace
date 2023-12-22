import { useEffect, useState } from 'react';
import { SignIn } from '../../Components/Registration/signIn';
import { SignUp } from '../../Components/Registration/signUp';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';


export const Sign = () => {
  const [choiceReg, setChoiceReg] = useState(true);
  useEffect(() => {
    setChoiceReg(true);
  }, []);

  return (
        <>
          <Header />
          {choiceReg ?
          <SignIn setChoiceReg={setChoiceReg} /> :
          <SignUp setChoiceReg={setChoiceReg} />}
          <Footer />
        </>
  )
};
