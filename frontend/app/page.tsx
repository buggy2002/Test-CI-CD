
export const dynamic = 'force-dynamic';

async function getData() {
  const apiUrl = process.env.API_URL || "http://api:8080";
  const res = await fetch(`${apiUrl}/hello`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Frontend Dashboard
      </h1>
      <div className="p-6 bg-slate-800 rounded-xl shadow-2xl border border-slate-700">
        <p className="text-xl font-medium text-slate-300">API Status:</p>
        <p className="text-3xl font-bold text-green-400 mt-2">{data.message}</p>
      </div>
      <button className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  );
}