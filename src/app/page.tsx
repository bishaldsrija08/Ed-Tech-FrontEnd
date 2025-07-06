'use client';
import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((store) => store.userSlice);
  const teacherData = useSelector((store)=>store.teac)
  return (
    <>
    <h1>{data.name} </h1>;
    <h1>{teacherData.teacherName} </h1>;
    </>
  )
}
