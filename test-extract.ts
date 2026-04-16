import axios from 'axios';

async function test() {
  try {
    const res = await axios.options("https://keykid-ca081f5cf60d.herokuapp.com/extract", {
      headers: {
        "Origin": "http://localhost:3000",
        "Access-Control-Request-Method": "POST"
      }
    });
    console.log("CORS Headers:", res.headers);
  } catch (e: any) {
    console.error("CORS Error:", e.message);
  }
}

test();
