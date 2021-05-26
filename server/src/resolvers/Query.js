async function person(_, { name }, { dataSources }) {
    try {
        const data = dataSources.ForceAPI.getPersonByName(name);
        if (!data) return []
        return data
    } catch (error) {
        if (error.extensions.response.status === 404) return null;
    }
}

async function allPeople(_, { page=1 }, { dataSources }) {
    const people = await dataSources.ForceAPI.getAllPeople( page );
    return people;
};

module.exports = {
    person,
    allPeople
};