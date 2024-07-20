"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PostItemFirst from "../components/postItemFirst";

export const Posts = () => {
  const router = useRouter();
  const [items, setItems] = useState<any | []>([]);

  // ==== FETCH POST FROM API
  const getItemsData = () => {
    fetch("/api/postitems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };
  // ==== USING HOOK IF REFRESH HAPPENS OR FETCH
  useEffect(() => {
    getItemsData();
  }, []);
  return (
    <section className="post-section h-screen mt-20">
      <div className="container-md" data-aos="fade-up">
        <div className="row gap-5">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="row gap-5">
              <div className="col-lg-4 border border-start">
                {items &&
                  items.length > 0 &&
                  items.map(
                    (item: {
                      _id: string;
                      title: string;
                      brief: string;
                      img: string;
                      date: string;
                      category: string;
                      avatar: string;
                      author: string;
                    }) => (
                      <PostItemFirst key={item._id} large={false} item={item} />
                    )
                  )}
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
