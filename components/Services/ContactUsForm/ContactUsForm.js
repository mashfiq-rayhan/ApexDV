import { useRouter } from "next/router";
import { sendMessage } from "./../../../api/message";
import { useState } from "react";

const ContactUsForm = () => {
  const contactSection = {
    inputs: [
      {
        name: "first_name",
        type: "text",
        placeholder: "First Name",
        required: true,
        label: "First Name*",
      },
      {
        name: "last_name",
        type: "text",
        placeholder: "Last Name",
        required: true,
        label: "Last Name*",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email Address",
        required: true,
        label: "Email*",
      },
      {
        name: "phone_number",
        placeholder: "Phone Number",
        type: "number",
        required: true,
        label: "Phone Number*",
      },
      {
        name: "message",
        placeholder: "Message",
        required: true,
        label: "Your Message*",
      },
    ],
  };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const data = {};
      contactSection.inputs.forEach(
        ({ name }) => (data[name] = formData.get(name)),
      );
      console.log(data);
      await sendMessage(data);
      router.push("/thank-you");
      console.log(e.target.value, formData);
    } catch (error) {
      console.log(error);
    }
  };

  const timelineData = [
    {
      id: 1,
      text: "Having received and processed your request, we will get back to you shortly to detail your project needs and sign an NDA to ensure the confidentiality of information.",
    },
    {
      id: 2,
      text: "After examining requirements, our analysts and developers devise a project proposal with the scope of works, team size, time, and cost estimates.",
    },
    {
      id: 3,
      text: "We arrange a meeting with you to discuss the offer and come to an agreement.",
    },
    {
      id: 4,
      text: "We sign a contract and start working on your project as quickly as possible.",
    },
  ];

  const addressData = [
    {
      id: 1,
      name: "UK OFFICE",
      address: "71-75 Shelton Street, ",
      addr: "Covent Garden, London, United Kingdom,",
      code: "WC2H 9JQ",
      email: "info@apexdv.com",
      number: "+447361608597",
    },
    {
      id: 2,
      name: "USA OFFICE",
      address: "27 Colonial Village Shelton, ",
      addr: "Connecticut,",
      code: "06484",
      email: "info@apexdv.com",
      number: "+1203-892-6285",
    },
    {
      id: 3,
      name: "BD OFFICE",
      address: "2 Lalbag Road, Suite 6  ",
      addr: "East Kamrangirchar,",
      code: "Dhaka-1211",
      email: "info@apexdv.com",
      number: "+8801964288131",
    },
  ];
  return (
    <>
      <div className="relative py-[60px] my-[60px]" id="contactUs">
        <div className="container">
          <div className="grid grid-cols-2 gap-[30px] max-sm:grid-cols-1 sm:max-md:grid-cols-1">
            <div className="w-full">
              <h2 className="font-teko font-normal text-[56px] leading-[60px] text-[#222429] mb-[60px] max-sm:text-[32px] max-sm:leading-10">
                Need a technological solution?
              </h2>
              <h2 className="font-teko font-normal text-[56px] leading-[60px] text-[#222429] mb-[60px] max-sm:text-[32px] max-sm:leading-10">Contact us!</h2>
              <form onSubmit={(e) => handleSubmit(e)} id="contact-form">
                {contactSection.inputs.map(
                  ({ name, type, placeholder, required, label, pattern }) => (
                    <div key={name} className="w-full mb-4">
                      <div className="field-inner">
                        {type ? (
                          <div className="mb-4">
                            {name === "phone_number" ? (
                              <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1caf83]"
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                required={required}
                                onInput={(e) => {
                                  e.target.setCustomValidity("");
                                }}
                                onInvalid={(e) =>
                                  e.target.setCustomValidity(
                                    "Phone number at least 10 digits",
                                  )
                                }
                              />
                            ) : (
                              <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1caf83]"
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                required={required}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="mb-4">
                            <textarea
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1caf83]"
                              rows={5}
                              name={name}
                              placeholder={placeholder}
                              required={required}></textarea>
                          </div>
                        )}
                      </div>
                    </div>
                  ),
                )}
                <div>
                  <p className="mb-4 font-rubik font-normal text-base leading-7 text-[#383a3e]">
                    Please be informed that when you click the submit button,
                    ApexDv will process your personal data in accordance with
                    our privacy policy for the purpose of providing you with the
                    appropriate information.
                  </p>
                  {loading ? (
                    <button disabled className="px-8 py-3 bg-[#1caf83] text-white font-rubik rounded-md hover:bg-[#16876a] transition-colors">
                      <span className="btn-title">Submitting..!</span>
                    </button>
                  ) : (
                    <button className="px-8 py-3 bg-[#1caf83] text-white font-rubik rounded-md hover:bg-[#16876a] transition-colors">
                      <span className="btn-title">Submit</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="w-full">
              <h2 className="font-teko font-normal text-[56px] leading-[60px] text-[#222429] mb-[60px] max-sm:text-[32px] max-sm:leading-10">What happens next?</h2>
              <div>
                {/* Custom Timeline */}
                <div className="space-y-4 py-6">
                  {timelineData.map((item, index) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#1CAF83] flex items-center justify-center text-white font-semibold z-10">
                          {item.id}
                        </div>
                        {index < timelineData.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-300 mt-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className="text-gray-600 text-sm md:text-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="font-teko font-normal text-[32px] leading-10 text-[#222429] mb-5">Quick Contact</h1>
                <div className="space-y-5">
                  {addressData.map((item, i) => (
                    <div key={item.id} className="p-5 border border-[#e0e0e0] rounded-md hover:shadow-lg hover:border-[#1caf83] transition-all">
                      <h1 className="font-teko font-normal text-[24px] leading-7 text-[#222429] mb-2">{item.name}</h1>
                      <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{item.address}</p>
                      <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{item.addr}</p>
                      <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{item.code}</p>
                      <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{item.email}</p>
                      <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{item.number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
