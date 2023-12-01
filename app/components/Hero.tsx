"use client";

import Link from "next/link";
import { account } from "@/pages/api/appwriteConfig";
import { useEffect, useState } from "react";
import Image from "next/image";
import dumbbell from "@/public/images/fitaidumbbell.svg";
import arrow from "@/public/images/arrow.svg";
import Navbar from "./Navbar";

import { app } from "@/pages/api/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

interface UserData {
  $id?: string;
  name?: string;
  email?: string;
  emailVerification?: boolean;
  charAt?: string;
}

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string | null;
  // Add other relevant fields
}
const Hero = () => {
  const [userDetails, setUserDetails] = useState<UserData>({});
  const [user, setUser] = useState<User | null>(null);
  // fetching user data

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('firebase user', user)
        const newUser: User = {
          uid: user.uid,
          email: user.email || '',
          emailVerified: user.emailVerified,
          displayName: user.displayName,
          // ... map other fields
        };
        setUser(newUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="hero-section md:mx-auto max-sm:bg-none">
      <div className="hero-title text-7xl  pt-2 font-product gap-2 font-bold flex flex-col justify-center items-center max-sm:text-3xl">
{/*         <span className="font-extrabold">Transform your</span> */}
        <span className="font-extrabold">
{/*           fitness journey with{" "} */}
          <span className="text-violet-500 font-extrabold">Vitality Fitness</span>
        </span>
        <p className="mt-4 text-lg w-[551px] font-semibold mx-auto leading-8 text-gray-600 sm:text-center max-sm:w-[340px]">
          Customized workout and diet plans, powered by AI. Say goodbye to
          generic routines and hello to a virtual personal trainer that adapts
          to your progress and motivates you towards success.
        </p>
        <div className="mt-8 flex gap-x-8 sm:justify-center justify-center">
          <Link
            href={userDetails?.email ? "/form" : "/signup"}
            className="z-10 inline-block rounded-md px-5 py-3 text-lg font-medium leading-7 border-2 text-black shadow-sm  border-violet-500  hover:border-violet-700"
          >
            Get started
            <span className="text-black font-bold ml-2" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
{/*         <div className="flex flex-row justify-center -mt-10 max-sm:mt-2">
          <Image src={dumbbell} className="w-[380px] max-sm:w-[300px]" alt={""}></Image>
        </div>
        <div className="flex flex-row justify-center -mt-10 hover:cursor-pointer max-sm:mt-2">
          <Image src={arrow} className="w-[50px]" alt={""}></Image>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
