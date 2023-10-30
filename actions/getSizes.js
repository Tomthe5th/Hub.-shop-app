const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

export default async function getSizes() {
  const res = await fetch(URL);

  return res.json();
}
