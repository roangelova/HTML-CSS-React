const baseUrl = 'http://softuni-custom-server.herokuapp.com/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);

    let pets = response.json();

    return pets; 0
};