const { RESTDataSource } = require('apollo-datasource-rest');

class ForceAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople() {
        const response = await this.get('people/');
        return Array.isArray(response.results)
            ? response.results.map(person => this.personReducer(person))
            : [];
    }

    async getPersonByName(name) {
        // https://swapi.dev/api/people/?search=r2
        try {
            const response = await this.get(`people`, { search: name });
            let {results} = response;
            results = results[0];
            if (!response || response.results.length == 0) throw new Error("no data");
            // let planetID = results['homeworld']; 
            // let planetID = this.resolvePlanetId(results['homeworld']);
            // planetID.substring(29, planetID.length - 1);
            // const planet = await this.getPlanet(planetID);
            // results['homeworld'] = planet['name'];
            // console.log(results)
            return this.personReducer(results);
        } catch (error) {
            return []
        }
    }

    resolvePlanetId(homeworld) {
       return homeworld.substring(29, homeworld.length - 1);
    }

    getPlanet(id) {
        return this.get(`planets/${id}/`);
    }

    async personReducer(person) {
        try {
            const {name} =await this.getPlanet(this.resolvePlanetId(person.homeworld));
            return {
                name: person.name,
                height: person.height,
                gender: person.gender,
                homeworld: name               
            };
        } catch (error) {
            
        }
    }
}

module.exports = ForceAPI;