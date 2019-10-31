// "Content-type": "application/json; charset=UTF-8"

export const request = (url, sendingMethod, authorization, dataObject) => {
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '',
      },
      method: '',
      body: '',
    };
  
    if (authorization) {
      const token = authorization;
      options.headers.Authorization = token;
    }
  
    if (sendingMethod) {
      options.method = sendingMethod;
    }
  
    if (dataObject) {
      options.body = JSON.stringify(dataObject);
    }else{
      delete options.body;
    }
     return fetch(url, options)
      .then(response => response.json())
      .then(json => json)
      .catch((error) => {
          return error;
      })
  }