'use client';
import { useAppDispatch } from "@/lib/store/hooks";
import { setAddress, setName } from "@/lib/store/userSlice";


const About = () => {
  const dispatch = useAppDispatch();
  const name = "Bishal";
  const address = "Chitwan";
  dispatch(setName(name));
  dispatch(setAddress(address));

  return (
    <>
      <h1>about page.</h1>
    </>
  );
};

export default About;