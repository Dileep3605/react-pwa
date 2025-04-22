export default function NearBy() {
  return (
    <div className="max-w-6xl p-4 flex flex-col gap-6 m-auto">
      <h1 className="text-4xl font-bold mb-4">NearBy</h1>
      <p className=" text-gray-600">
        This is the NearBy page. You can view nearby restaurants here.
      </p>
      <div className="mt-8">
        <img
          src="https://picsum.photos/800/600"
          alt="NearBy"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
