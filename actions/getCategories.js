const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

export default async function getCategories() {
  const res = await fetch(URL);

  return res.json();
}
