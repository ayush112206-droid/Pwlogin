import axios from 'axios';

async function test() {
  try {
    const res = await axios.post("http://localhost:3000/api/v1/proxy/extract", {
      mpd_url: "https://d1d34p8vz63oiq.cloudfront.net/9035e57c-df7a-463f-81df-9452c22852a2/master.mpd",
      bearer_token: "dummy"
    });
    console.log("Proxy Success:", res.data);
  } catch (e: any) {
    console.error("Proxy Error:", e.response?.data || e.message);
  }
}

test();
