const { RESTDataSource } = require('apollo-datasource-rest');

class ForceAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople(page) {
        const response = await this.get('people/', { page:page });
        return Array.isArray(response.results)
            ? response.results.map(person => this.personReducer(person))
            : [];
    }

    async getPersonByName(name) {
        try {
            const response = await this.get(`people`, { search: name });
            let {results} = response;
            results = results[0];
            if (!response || response.results.length == 0) throw new Error("no data");
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
            const {name} = await this.getPlanet(this.resolvePlanetId(person.homeworld));
            return {
                name: person.name,
                height: person.height,
                gender: person.gender,
                mass: person.mass,
                homeworld: name               
            };
        } catch (error) {
            return []
        }
    }
}

module.exports = ForceAPI;