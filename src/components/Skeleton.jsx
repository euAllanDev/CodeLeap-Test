export default function Skeleton() {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm animate-pulse mb-4">
      <div className="bg-gray-300 h-14 w-full"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
}