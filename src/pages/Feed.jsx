import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import CreatePost from "../components/CreatePost";
import Skeleton from "../components/Skeleton";

export default function Feed({ username, onLogout }) {
  const { data: posts, isLoading, error } = usePosts();
  
  const [deletePost, setDeletePost] = useState(null);
  const [editPost, setEditPost] = useState(null);

  if (error) return <div className="text-center mt-10 text-red-500">Erro ao carregar posts</div>;

  return (
     <div className="bg-gray-100 min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[600px] mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
        
        <header className="bg-blue-500 text-white p-4 font-bold flex justify-between items-center rounded-t-lg">
          <span>CodeLeap Network</span>
          <button 
            onClick={onLogout} 
            className="text-xs bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </header>
        
        <div className="p-4 space-y-4">
          <CreatePost username={username} />

          {isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            posts?.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                username={username}
                onDelete={() => setDeletePost(post)} // Corrigido
                onEdit={() => setEditPost(post)}     // Corrigido
              />
            ))
          )}
        </div>
      </div>
      
      {/* Renderização dos Modais */}
      {deletePost && (
        <DeleteModal 
          post={deletePost} 
          onClose={() => setDeletePost(null)} 
        />
      )}
      {editPost && (
        <EditModal 
          post={editPost} 
          onClose={() => setEditPost(null)} 
        />
      )}
    </div>
  );
}