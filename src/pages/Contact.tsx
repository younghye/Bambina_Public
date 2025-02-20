import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import LoadingOverlay from "react-loading-overlay-ts";
import { useState, useEffect } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BiError } from "react-icons/bi";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
  const templateID = process.env
    .REACT_APP_EMAILJS_RESETPASS_TEMPLATE_ID as string;

  const inputStyle =
    "form-control bg-gray-50 border-gray-300 border rounded-lg w-full p-2.5";

  useEffect(
    () => emailjs.init({ publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }),
    []
  );

  const closeModal = () => {
    setIsOpen(false);
    setIsError(false);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(serviceID, templateID, {
        from: e.target.email.value,
        to: process.env.REACT_APP_EMAIL_RECIVER,
        subject: "Bambina Website Query from " + e.target.name.value,
        html: e.target.message.value,
      })
      .then(
        (res) => {
          setIsOpen(true);
        },
        (error) => {
          setIsOpen(true);
          setIsError(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading">
      <div className="relative font-serif">
        <div
          className="bg-cover bg-no-repeat bg-center h-[50vh]"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/images/contact.jpg"
            })`,
          }}
        ></div>
        <div className="absolute top-[25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl md:text-5xl">
          Contact Us
        </div>

        <div className="flex items-center justify-center">
          <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-32 text-start mt-10 mb-20 md:ms-40 md:me-25">
            <form onSubmit={handleOnSubmit}>
              <div>
                <p>
                  Please fill out this form to contact us and we'll get back to
                  you right away! If you need to contact us ASAP or order please
                  call the store. Thanks!
                </p>
                <div className="mb-5 mt-4">
                  <label htmlFor="name" className="required">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={inputStyle}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="required">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={inputStyle}
                    placeholder="john@gmail.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="required">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className={inputStyle}
                    placeholder="Write a message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 rounded-lg px-3 py-2 mb-2"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            <div className="mt-2 ps-2">
              <div className="mb-8">
                <div className="font-bold text-lg mb-2">ADDRESS</div>
                <div>
                  268 Ponsonby Road,
                  <br /> Ponsonby,
                  <br /> Auckland 1011
                </div>
              </div>

              <div className="mb-8">
                <div className="font-bold text-lg mb-2">PHONE</div>
                <div>09 360 4000</div>
              </div>

              <div className="mb-8">
                <div className="font-bold text-lg mb-2">EMAIL</div>
                <div>bambina@gmail.com</div>
              </div>

              <div className="mb-8">
                <div className="font-bold text-lg mb-2">OPENING HOURS</div>
                <div>
                  Mon - Sat 6:30am - 3:00pm <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun
                  7:00am - 3:00pm
                </div>
              </div>

              <div className="flex">
                <a
                  href="https://www.facebook.com/bambinaponsonby/"
                  className="me-2"
                >
                  <FaSquareFacebook size={35} color="blue" />
                </a>
                <a href="https://www.instagram.com/bambinaponsonby">
                  <FaInstagramSquare size={35} color="red" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          className="absolute w-4/6 md:w-3/12 [box-shadow:_0px_0px_8px_rgba(0,0,0,0.40)] font-serif border rounded bg-gray-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          {isError ? (
            <div>
              <div className="flex justify-center m-5">
                <BiError size={55} color="red" />
              </div>
              <div className="font-bold text-xl mb-2">Ooops</div>
              <div>
                Send email failed.
                <br />
                Try it again or call the store.
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center m-6">
                <FaCheck size={35} color="green" />
              </div>
              <div className="font-bold text-xl mb-2">AWSOME</div>
              <div>Email successfully sent!</div>
            </div>
          )}
          <button
            className="text-white bg-green-700 hover:bg-green-800 rounded-lg px-4 py-2 m-5"
            onClick={closeModal}
          >
            CLOSE
          </button>
        </Modal>
      </div>
    </LoadingOverlay>
  );
}
