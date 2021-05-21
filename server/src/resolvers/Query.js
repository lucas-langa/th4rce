async function person(_, { name }, { dataSources }) {
    // console.log(name)
    try {
        const data = dataSources.ForceAPI.getPersonByName(name);
        if (!data) return []
        return data
    } catch (error) {
        console.log(error+"error at person")
        if (error.extensions.response.status === 404) return null;
    }
}

async function allPeople(_, __, { dataSources }) {
    const people = await dataSources.ForceAPI.getAllPeople();
    return people;
};

module.exports = {
    person,
    allPeople
};