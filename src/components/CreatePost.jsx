import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";

export default function CreatePost({ username }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => api.post("/", data),
    onSuccess: () => {
      // Invalida a lista para buscar os novos dados
      queryClient.invalidateQueries(["posts"]);
      // Limpa os campos após sucesso
      setTitle("");
      setContent("");
    },
    onError: (err) => {
      alert("Erro ao criar post, tente novamente.");
      console.error(err);
    }
  });

  function handleCreate() {
    if (!title || !content) return;
    mutate({ username, title, content });
  }

  // Desabilita se estiver enviando OU se os campos estiverem vazios
  const isDisabled = isPending || !title || !content;

  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">What's on your mind?</h2>

      <input
        className="border border-gray-300 w-full p-2 mb-4 rounded"
        placeholder="Hello world"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border border-gray-300 w-full p-2 mb-4 rounded min-h-[80px]"
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex justify-end">
        <button
          disabled={isDisabled}
          onClick={handleCreate}
          className={`px-8 py-2 text-white font-bold transition-colors ${
            isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPending ? "CREATING..." : "CREATE"}
        </button>
      </div>
    </div>
  );
}