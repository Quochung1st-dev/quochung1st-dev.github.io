import { useEffect, useState } from "react";
import { ApiResponse, Manga } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState<Manga[]>([]); // Dữ liệu từ API
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState<string | null>(null); // Lỗi nếu có

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://v2.truyenseo.com/api/truyen-moi");
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData: ApiResponse = await response.json();
        setData(jsonData.data); // Lấy phần `data` trong API response
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <>
    <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
            
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <h1>Loading....</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if (error) (
    <>
    <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
            
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <h1>Loading....</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      My Projects
                    </span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.map((manga) => (

                    <Link key={manga.slug}
                      className="card shadow-lg compact bg-base-100 cursor-pointer"
                      to={`/${manga.slug}`}
                    >
                      <div className="p-8 h-full w-full">
                        <div className="flex items-center flex-col">
                          <div className="w-full">
                            <div className="px-4">
                              <div className="text-center w-full">
                                <h2 className="font-medium text-center opacity-60 mb-2">
                                {manga.name}
                                </h2>
                                <div className="avatar opacity-90">
                                  <div className="w-24 h-24 mask mask-squircle">
                                    <img
                                      src={`${manga.cdn}/${manga.thumb_url}`}
                                      alt={manga.name}
                                    />
                                  </div>
                                </div>
                                <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Sed euismod, nunc ut.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
