"use client";
import TitleSlice from "../tittle/title";
import RedButton from "../button/redButton";

export default function PageNotFound() {
  return (
    <div className="flex justify-center content-center mx-[10%] pb-[5%] rounded-md">
      <div className="text-center max-w-7xl" data-aos="flip-right">
        <TitleSlice
          subtitle="ERROR"
          title="Uh Sorry, We couldn't find this page"
          quote="Please check again your connection or
            path. We can't seem to find the page you're looking for. Try Going
            back to the previous page or get touch with the website owner."
        />
        <div className="inline-block content-center">
          <img src="../error.png" width={400} height={100} alt="Error Images" />
        </div>
        <RedButton href={"/"} tittle={"Back to Home"} />
      </div>
    </div>
  );
}
