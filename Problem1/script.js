var baseUrl = "https://cors-anywhare.herokuapp.com/";
      var url = "https://rickandmortyapi.com/api/episode";
      let allEpisodes = [];
      let FinalData = [];

      async function getAllEpisodes() {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      getAllEpisodes().then((data) => {
        console.log("JSON DATA", data);
        allEpisodes = data.results;
        console.log("allEpisodes", allEpisodes);
        replace();
      });

      async function replace() {
        allEpisodes.map(function (results) {
          var characterUrls = results.characters;
          results.characters = [];
          characterUrls.forEach(async function (url) {
            let response = await fetch(baseUrl + url);
            let data = await response.json();
            results.characters.push(data);
            console.log("results with data", results);
            FinalData.push(results);
          });
        });
        console.log("FinalData", FinalData);
      }