import axios from 'axios';

async function test() {
  try {
    const res = await axios.get("https://keykid-ca081f5cf60d.herokuapp.com/openapi.json");
    console.log(JSON.stringify(res.data, null, 2));
  } catch (e: any) {
    console.error("Error:", e.message);
  }
}

test();
