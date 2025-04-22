export default function Restaurants() {
  return (
    <div className="max-w-6xl p-4 flex flex-col gap-6 m-auto">
      <h1 className="text-4xl font-bold mb-4">Restaurants</h1>
      <p className="text-lg text-gray-600">
        This is the Restaurants page. You can add your restaurant listings here.
      </p>
      <div className="mt-8">
        <img
          src="https://picsum.photos/800/600"
          alt="Restaurants"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
