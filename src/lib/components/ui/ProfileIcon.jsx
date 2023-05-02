export default function ProfileIcon({ size }){
  return (
    <div
      className={`inline-block rounded-full overflow-hidden bg-gray-200 h-8 w-8 lg:hidden`}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Profile icon"
        className="object-cover w-full h-full"
      />
    </div>
  );
};


