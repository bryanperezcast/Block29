export default async function newPlayerHelper (singlePlayerData) {
    try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(singlePlayerData),
          });
        const result = await response.json();
        return result;
      } catch (err) {
        console.error(err);
      }
    }