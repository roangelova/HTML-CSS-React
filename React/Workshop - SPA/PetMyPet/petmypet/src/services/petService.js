const baseUrl = 'http://softuni-custom-server.herokuapp.com/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);

    let pets = await response.json();

    return Object.values(pets);
};