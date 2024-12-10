import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface DetailData {
  name: string;
  slug: string;
  status: number;
  cdn: string;
  thumb_url: string;
  category: Categories[];
  chapters: Chapters[];
  description: string; // Thêm các field khác từ API nếu cần
}

interface Categories {
    name: string;
    slug: string;
}

interface Chapters {
    id: number;
    name: string;
    slug: string;
}

interface ApiResponse {
    status: number;
    message: string;
    data: DetailData;
  }

const Detail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Lấy slug từ URL
  const [data, setData] = useState<DetailData | null>(null); // Dữ liệu chi tiết từ API
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState<string | null>(null); // Lỗi nếu có

  useEffect(() => {
    // Gọi API khi component được render
    const fetchData = async () => {
      try {
        const response = await fetch(`https://v2.truyenseo.com/api/truyen/${slug}`);
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData: ApiResponse = await response.json();
        setData(jsonData.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false); // Dừng trạng thái tải
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <p>Loading...</p>; // Hiển thị trạng thái tải
  if (error) return <p>Error: {error}</p>; // Hiển thị lỗi nếu có

  // Hiển thị chi tiết manga
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
                      {data?.name}
                    </span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data?.description}
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

export default Detail;
