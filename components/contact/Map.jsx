import React from "react";

export default function Map() {
  return (
    <div className=" bg-white p-5 shadow-sm rounded-sm mx-10 my-5 lg:my-0">
      <h2 className="text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)] lg:text-start text-center">
        Our Location
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.2531253901916!2d51.422151782982546!3d35.77714703971223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06875b2987f7%3A0x4550b7828f1cc0b0!2sTehran%20Province%2C%20Tehran%2C%20District%203%2C%20Golfam%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1786779455819!5m2!1sen!2s"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded-sm w-full lg:h-[450px]"
        ></iframe>
      </div>
    </div>
  );
}
