const Navbar = () => (
  <>
    <div className="grid grid-cols-1 gap-6">
      <div className="card shadow-lg compact bg-base-100">
        <div className="grid place-items-center py-8">
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://avatars.githubusercontent.com/u/33123066?v=4"
                alt="Quốc Hùng"
              />
            </div>
          </div>
          <div className="text-center mx-auto px-8">
            <h5 className="font-bold text-2xl">
              <span className="text-base-content opacity-70">Quốc Hùng</span>
            </h5>
            <div className="mt-3 text-base-content text-opacity-60 font-mono">
              Chào các bạn mình là Quốc Hùng , mình sinh ra thuộc cung song tử
              ,song tử luôn khẳng định chính mình ,luôn luôn phấn đấu vượt lên
              phía trước
            </div>
          </div>
          <a
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            target="_blank"
            className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
            download=""
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="text-base-content text-opacity-60">
            <div className="flex justify-start py-2 px-1 items-center">
              <div className="flex-grow font-medium gap-2 flex items-center my-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                </svg>{" "}
                Based in:
              </div>
              <div
                className=" text-sm font-normal text-right mr-2 ml-3 "
                style={{ wordBreak: "break-word" }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start py-2 px-1 items-center"
                >
                  Phù Mỹ, Bình Định
                </a>
              </div>
            </div>
            <div className="flex justify-start py-2 px-1 items-center">
              <div className="flex-grow font-medium gap-2 flex items-center my-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>{" "}
                GitHub:
              </div>
              <div
                className=" text-sm font-normal text-right mr-2 ml-3 truncate"
                style={{ wordBreak: "break-word" }}
              >
                <a
                  href="https://github.com/quochung1st-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start py-2 px-1 items-center"
                >
                  quochung1st-dev
                </a>
              </div>
            </div>
            <div className="flex justify-start py-2 px-1 items-center">
              <div className="flex-grow font-medium gap-2 flex items-center my-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>{" "}
                Facebook:
              </div>
              <div
                className=" text-sm font-normal text-right mr-2 ml-3 truncate"
                style={{ wordBreak: "break-word" }}
              >
                <a
                  href="https://www.facebook.com/https://www.facebook.com/quochungit1st.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start py-2 px-1 items-center"
                >
                  https://www.facebook.com/quochungit1st.dev
                </a>
              </div>
            </div>
            <div className="flex justify-start py-2 px-1 items-center">
              <div className="flex-grow font-medium gap-2 flex items-center my-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                </svg>{" "}
                Website:
              </div>
              <div
                className=" text-sm font-normal text-right mr-2 ml-3 truncate"
                style={{ wordBreak: "break-word" }}
              >
                <a
                  href="https://vnhte.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start py-2 px-1 items-center"
                >
                  vnhte.com
                </a>
              </div>
            </div>
            <div className="flex justify-start py-2 px-1 items-center">
              <div className="flex-grow font-medium gap-2 flex items-center my-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                </svg>{" "}
                Email:
              </div>
              <div
                className=" text-sm font-normal text-right mr-2 ml-3 truncate"
                style={{ wordBreak: "break-word" }}
              >
                <a
                  href="mailto:quochung1998.cit@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start py-2 px-1 items-center"
                >
                  quochung1998.cit@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">Tech Stack</span>
            </h5>
          </div>
          <div className="p-3 flow-root">
            <div className="-m-1 flex flex-wrap justify-center">
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                PHP
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Laravel
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                JavaScript
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                React.js
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Node.js
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Nest.js
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                MySQL
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                PostgreSQL
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Git
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Docker
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                PHPUnit
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                CSS
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Antd
              </div>
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                Tailwind
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">Experience</span>
            </h5>
          </div>
          <div className="text-base-content text-opacity-60">
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              <li className="mb-5 ml-4">
                <div
                  className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                  style={{ left: '-4,5px' }}
                ></div>
                <div className="my-0.5 text-xs">September 2021 - Present</div>
                <h3 className="font-semibold">Position</h3>
                <div className="mb-4 font-normal">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://example.com"
                  >
                    Company Name
                  </a>
                </div>
              </li>
              <li className="mb-5 ml-4">
                <div
                  className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                  style={{ left: '-4,5px' }}
                ></div>
                <div className="my-0.5 text-xs">July 2019 - August 2021</div>
                <h3 className="font-semibold">Position</h3>
                <div className="mb-4 font-normal">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://example.com"
                  >
                    Company Name
                  </a>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">
                Certification
              </span>
            </h5>
          </div>
          <div className="text-base-content text-opacity-60">
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              <li className="mb-5 ml-4">
                <div
                  className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                  style={{ left: '-4,5px' }}
                ></div>
                <div className="my-0.5 text-xs">March 2022</div>
                <div className="font-medium">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://example.com"
                  >
                    Lorem ipsum
                  </a>
                </div>
                <h3 className="mb-4 font-normal">Lorem ipsum dolor sit amet</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">Education</span>
            </h5>
          </div>
          <div className="text-base-content text-opacity-60">
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              <li className="mb-5 ml-4">
                <div
                  className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                  style={{ left: '-4,5px' }}
                ></div>
                <div className="my-0.5 text-xs">2015 - 2019</div>
                <h3 className="font-semibold">Degree</h3>
                <div className="mb-4 font-normal">Institution Name</div>
              </li>
              <li className="mb-5 ml-4">
                <div
                  className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                  style={{ left: '-4,5px' }}
                ></div>
                <div className="my-0.5 text-xs">2012 - 2014</div>
                <h3 className="font-semibold">Degree</h3>
                <div className="mb-4 font-normal">Institution Name</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Navbar;
