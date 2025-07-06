'use client';
import { setAddress, setName } from "@/lib/store/userSlice";
import { useDispatch } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
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
