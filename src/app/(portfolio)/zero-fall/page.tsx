"use client";

import Card from "./components/Card";
import ScrollUpButton from "./components/Buttons/ScrollUp";
import { SlideDiv } from "../../_components/SlideDiv";

const Home = () => {
  return (
    <>
      <div className="bg-[url(/img/background.png)] bg-center bg-no-repeat bg-fixed bg-cover">
        <div className="full-screen flex flex-col items-center justify-center px-5 pb-10">
          <div className="flex grow flex-col items-center justify-center">
            <SlideDiv>
              <img
                src="/img/zero-fall-logo.png"
                alt="Zero Fall Studios"
                width="830"
                height="80"
              />
            </SlideDiv>
          </div>
          <div className="h-64 sm:h-32">
            <SlideDiv margin="0px 0px 0px 0px">
              <div className="flex flex-col flex-wrap p-5 text-center text-white sm:flex-row gap-2">
                <a className="top-link" href="#games">
                  Games
                </a>
                <div className="hidden sm:block">|</div>
                <a className="top-link" href="#videos">
                  Videos
                </a>
                <div className="hidden sm:block">|</div>
                <a className="top-link" href="#links">
                  Links
                </a>
              </div>
            </SlideDiv>
          </div>
        </div>
        <div className="overflow-hidden px-4 lg:px-32 xl:px-64">
          <div className="mx-auto min-h-screen max-w-4xl">
            <SlideDiv margin="0px 0px -200px 0px">
              <h3 id="games" className="py-5 text-center text-2xl text-white">
                Games
              </h3>
            </SlideDiv>
            <div className="flex flex-col gap-5">
              <SlideDiv dir="left" margin="0px 0px -200px 0px">
                <Card
                  src="wZ_C9pSa7sc"
                  title="The Insurance Salesman"
                  href="https://tipodd.itch.io/the-insurance-salesman"
                  description="An old school text parser mini adventure game in the style of the AGI Sierra classic games like Kings Quest and Space Quest. You can finish this in about 25 minutes."
                  direction="right"
                />
              </SlideDiv>
              <SlideDiv dir="right" margin="0px 0px -200px 0px">
                <Card
                  src="Y0hTlhxgPZc"
                  title="Trouble in Snowland"
                  href="https://tipodd.itch.io/trouble-in-snowland"
                  description="Happy Hollidays! Trouble in Snowland is a 2D platformer where you play as a snowman who is trying to save the holidays from the evil elves."
                  direction="left"
                />
              </SlideDiv>
            </div>
            <SlideDiv margin="0px 0px -200px 0px">
              <h3 id="videos" className="py-5 text-center text-2xl text-white">
                Videos
              </h3>
            </SlideDiv>
            <div className="flex flex-col gap-5">
              <SlideDiv dir="left" margin="0px 0px -200px 0px">
                <Card
                  src="nphZ-5NeN_c"
                  title="Rain Flowers"
                  href="https://tipodd.itch.io/rain-flowers"
                  description="A relaxing day of rain."
                  direction="right"
                />
              </SlideDiv>
              <SlideDiv dir="right" margin="0px 0px -200px 0px">
                <Card
                  src="vGW5O1i2vMM"
                  title="Lost in the clouds"
                  href="https://youtu.be/vGW5O1i2vMM"
                  description="Staring at the clouds in a daydream."
                  direction="left"
                />
              </SlideDiv>
              <SlideDiv dir="left" margin="0px 0px -200px 0px">
                <Card
                  src="Rkqfn6iCG84"
                  title="City Rain"
                  href="https://youtu.be/Rkqfn6iCG84"
                  description="The city rain brings calm."
                  direction="right"
                />
              </SlideDiv>
            </div>
          </div>
          <SlideDiv margin="0px 0px -200px 0px">
            <h3 id="links" className="py-5 text-center text-2xl text-white">
              Links
            </h3>
          </SlideDiv>
          <SlideDiv margin="0px 0px -200px 0px">
            <footer className="bg-background rounded-t-2xl p-2 sm:p-16 max-w-4xl mx-auto">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="px-5 pb-10 flex flex-col">
                    <h6 className="text-xl font-bold">Help</h6>
                    <div className="pt-2">
                      <hr />
                    </div>
                    <div className="h-4" />
                    <a className="" href={"/support"}>
                      Support
                    </a>
                    <a className="" href={"/privacy"}>
                      Privacy
                    </a>
                    <a className="" href={"/terms"}>
                      Terms &amp; Conditions
                    </a>
                  </div>
                  <div className="px-5 pb-10 flex flex-col">
                    <h6 className="text-xl font-bold">Resources</h6>
                    <div className="pt-2">
                      <hr />
                    </div>
                    <div className="h-4" />
                    <a
                      className=""
                      href={"https://tipodd.itch.io/"}
                      target="_blank"
                    >
                      Game Assets
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <ScrollUpButton />
              </div>
            </footer>
          </SlideDiv>
        </div>
      </div>
    </>
  );
};

export default Home;
