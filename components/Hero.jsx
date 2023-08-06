"use client";

import hero from "@styles/hero.module.scss";
import Link from "next/link";
import { useState } from "react";
import Logo from "@components/Logo";
import Login from "./Login";
import { isUserExist } from "@util/functions";

const Hero = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const setLogin = () => {
    setIsLogin(!isLogin);
  };

  let userExist = isUserExist();
  console.log(userExist);

  return (
    <main className={hero.wrapper}>
      <div className={hero.navbar}>
        <nav className={`container`}>
          {/* <h1>
            Department of <br /> <span>Civil Engineering</span>
          </h1> */}
          <Logo />

          <div className={hero.links}>
            {userExist && (
              <Link href="/civil-library/1-mUzNBGS-gf0XxLc7yGUoOxFIniFsJUN">
                / Library
              </Link>
            )}
            <Link href="#">/ Achievements</Link>
            <Link href="#">/ Faculty</Link>
            <Link href="#">/ Gallery</Link>
            <Link href="#" onClick={setLogin}>
              / Login
            </Link>
          </div>

          {/* <Login/> */}

          {mobileNav ? (
            <div className={hero.mobile_links}>
              <h1 onClick={() => setMobileNav(false)}>X</h1>
              <Link href="/civil-library/1-mUzNBGS-gf0XxLc7yGUoOxFIniFsJUN">
                / Library
              </Link>
              <Link href="#">/ Achievements</Link>
              <Link href="#">/ Faculty</Link>
              <Link href="#">/ Gallery</Link>
              <Link href="#" onClick={setLogin}>
                / Login
              </Link>
            </div>
          ) : (
            <p className="d_lg_none" onClick={() => setMobileNav(true)}>
              / Menu
            </p>
          )}
        </nav>
        <div className={`container sm_d_none ${hero.line}`} />
      </div>

      <h1 className={`container`}>
        Explore <br />
        Civil Engineering
      </h1>

      {isLogin && <Login setLogin={setLogin} />}
    </main>
  );
};

export default Hero;
