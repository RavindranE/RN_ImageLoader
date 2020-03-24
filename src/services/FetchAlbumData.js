import NetInfo from '@react-native-community/netinfo'

const albumURL = 'http://jsonplaceholder.typicode.com/photos';

//Fetch the photo album
export async function fetchAlbumData() {
  
  //Check the network availability to initiate fetch request...
  if(!this.isNetworkAvailable()){
    return [];
  }

  //Fetch Album Info from shared url
  let result = await fetch(albumURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .catch((error) =>{
    console.error(error);
    return []
  });
  return result;
}

//Network availability check method
isNetworkAvailable = async() =>{
   let state = await NetInfo.fetch();
   return (state && state.isConnected);
}
