import axios from "axios";

export default function DeleteModal({ post, onClose }) {

  const handleDelete = async () => {
    try {

      await axios.delete(
        `https://dev.codeleap.co.uk/careers/${post.id}/`
      );

      window.location.reload(); // atualiza o feed

    } catch (error) {
      console.error("Erro ao deletar", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg w-[400px]">

        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to delete this item?
        </h2>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="border px-4 py-1 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}