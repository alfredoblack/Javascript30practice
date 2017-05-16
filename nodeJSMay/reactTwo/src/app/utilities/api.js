var api = {
  getRovers(){
    var url ='https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=O0U1ONWyeKxalo0n3vMisT9xmSDiHe3MSBZ4qbcW';
    return fetch(url).then((res) => res.json());
  }
};



module.exports = api;