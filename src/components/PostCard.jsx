import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";


function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 }
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = Math.floor(seconds / intervals[i].seconds);

    if (interval >= 1) {
      return `${interval} ${intervals[i].label}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}


export default function PostCard({ post, username, onDelete, onEdit }) {
  const isOwner = username === post.username;

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">

      
      <div className="bg-blue-500 text-white p-3 flex justify-between items-center">

        <h2 className="font-semibold truncate pr-4 flex-1">
          {post.title}
        </h2>

        {isOwner && (
          <div className="flex gap-3 flex-shrink-0">

            <button
              onClick={() => onDelete(post)}
              className="hover:opacity-80"
            >
              🗑
            </button>

            <button
              onClick={() => onEdit(post)}
              className="hover:opacity-80"
            >
              ✏️
            </button>

          </div>
        )}

      </div>

     
      <div className="p-4">

        <div className="flex justify-between items-center text-gray-500 text-sm mb-3">

          <span className="font-semibold">
            @{post.username}
          </span>

          <span className="whitespace-nowrap text-gray-400">
           {timeAgo(post.created_datetime)}
          </span>

        </div>

        <p className="text-gray-800 break-words leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>

      </div>

    </div>
  );
}