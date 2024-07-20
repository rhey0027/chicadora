import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostItemFirst = ({
  large,
  item,
}: {
  large?: boolean;
  item: {
    _id: string;
    img: string;
    category: string;
    brief: string;
    title: string;
    date: string;
    avatar: string;
    author: string;
  };
}) => {
  return (
    <div className={`post-entry-1 ${large ? "lg" : undefined}`}>
      <Link href={`postitems/${item._id}`}>
        <Image
          src={item.img}
          alt={item.title}
          width={400}
          height={700}
          className={`h-64 object-cover ${large ? "h-96" : ""}`}
        />
      </Link>
      <div className="post-meta mt-3">
        <span className="date">{item.category}</span>
        <span className="mx-1">
          <i className="bi bi-dot"> </i>
        </span>{" "}
        <span>{new Date(item.date).toLocaleDateString("en-US")}</span>
      </div>
      <h3 className="text-3xl font-medium w-[400px] mb-3 mt-6 leading-8 text-gray-800">
        <Link href={`postitems/${item._id}`}>{item.title}</Link>
      </h3>
      {large ? (
        <>
          <p className="mb-5 block">{item.brief}</p>
          <div className="flex">
            <div className="avatar-photo">
              <Image
                src={item.avatar}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="author-name">
              <h3>{item.author}</h3>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PostItemFirst;
