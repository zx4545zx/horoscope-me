export async function getData(sign, day) {
  const option = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
      option
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
}