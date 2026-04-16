import axios from 'axios';

async function test() {
  try {
    const res = await axios.get("https://keykid-ca081f5cf60d.herokuapp.com/extract-query", {
      params: {
        url: "https://d1d34p8vz63oiq.cloudfront.net/9035e57c-df7a-463f-81df-9452c22852a2/master.mpd",
        token: "dummy"
      }
    });
    console.log("Success:", res.data);
  } catch (e: any) {
    console.error("Error:", e.response?.data || e.message);
  }
}

test();
