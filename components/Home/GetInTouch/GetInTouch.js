import React, { useState } from "react";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="bg-gray-50 px-1.5 py-1.5 lg:px-25 lg:py-15" id="getInTouch">
      <div className="bg-white p-5 lg:p-20 shadow rounded">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="flex flex-col items-center w-full lg:w-[505px]">
            <h4 className="font-teko text-2xl">Get In Touch</h4>
            <p className="font-teko">
              We are here for you. How can we help you?
            </p>
            <input
              className="my-6.75 w-4/5 lg:w-full px-4 py-3 border border-gray-300 rounded"
              id="name"
              placeholder="Full Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="my-6.75 w-4/5 lg:w-full px-4 py-3 border border-gray-300 rounded"
              id="email"
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="my-6.75 w-4/5 lg:w-full px-4 py-3 border border-gray-300 rounded"
              id="Subject"
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="my-6.75 w-4/5 lg:w-full px-4 py-3 border border-gray-300 rounded"
              id="Message"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={4}
            />
            <button
              className="h-14 mt-6.75 bg-[#1CAF83] hover:bg-[#49BF9C] w-4/5 lg:w-full text-white rounded"
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div>
            <div className="bg-white shadow rounded">
              <img
                className="p-1.5 lg:p-12.5 h-[390px] w-full lg:w-[505px]"
                alt="Chatting"
                src="/images/LandingPage/GetInTouch/chatting.svg"
              />
              <div className="m-2.5 flex flex-row items-center">
                <div className="h-12 w-12 rounded-lg bg-white shadow flex items-center justify-center">
                  <img
                    className="h-7 w-7"
                    alt="checkin"
                    src="/images/LandingPage/GetInTouch/checkin.svg"
                  />
                </div>
                <p className="ml-5">
                  71-75 Shelton Street,Covent Garden, London, United Kingdom,
                  WC2H 9JQ
                </p>
              </div>
              <div className="m-2.5 flex flex-row items-center">
                <div className="h-12 w-12 rounded-lg bg-white shadow flex items-center justify-center">
                  <img
                    className="h-7 w-7"
                    alt="checkin"
                    src="/images/LandingPage/GetInTouch/phone.svg"
                  />
                </div>
                <p className="ml-5">+447361608597</p>
              </div>
              <div className="m-2.5 flex flex-row items-center">
                <div className="h-12 w-12 rounded-lg bg-white shadow flex items-center justify-center">
                  <img
                    className="h-7 w-7"
                    alt="checkin"
                    src="/images/LandingPage/GetInTouch/address.svg"
                  />
                </div>
                <p className="ml-5">info@apexdv.com</p>
              </div>
              <div className="pr-30.25 flex flex-row items-center bg-gray-100">
                <img
                  className="m-4 h-6.25 w-6.25"
                  alt="facebook"
                  src="/images/LandingPage/Foot/facebook.svg"
                />
                <img
                  className="m-4 h-6.25 w-6.25"
                  alt="twitter"
                  src="/images/LandingPage/Foot/twitter.svg"
                />
                <img
                  className="m-4 h-6.25 w-6.25"
                  alt="linkedin"
                  src="/images/LandingPage/Foot/linkedin.svg"
                />
                <img
                  className="m-4 h-6.25 w-6.25"
                  alt="instagram"
                  src="/images/LandingPage/Foot/instagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
