import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";

export default function EditModal({ post, onClose }) {

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const queryClient = useQueryClient();

  const updatePost = useMutation({
    mutationFn: async () => {
      await api.patch(`/${post.id}/`, {
        title,
        content
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      onClose();
    }
  });

  const disabled = !title || !content;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="bg-white w-[450px] rounded-lg shadow-xl p-6">

        <h2 className="text-lg font-semibold mb-4">
          Edit item
        </h2>

        <label className="text-sm font-medium">
          Title
        </label>

        <input
          className="border border-gray-300 w-full p-2 rounded mt-1 mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="text-sm font-medium">
          Content
        </label>

        <textarea
          className="border border-gray-300 w-full p-2 rounded mt-1 mb-6"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            disabled={disabled}
            onClick={() => updatePost.mutate()}
            className={`px-4 py-2 rounded-md text-white transition ${
              disabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}