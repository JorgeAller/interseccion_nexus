type CreatePathWithParamsProps = {
    path: string;
    params:  any;
}

export const createPathWithParams = ({path, params}: CreatePathWithParamsProps) => {
    console.log({path, params})
    if(!params || Object.keys(params).length < 1){
        return path
    } else if(params.idUser){
        return `${path}${params.idUser}`
    }
    else {
        const labProjectParams = `${params.type}/${params.labType}`
        const searchParams = params.idSection || params.idSession || params.idFilm || params.idPeople || labProjectParams || '';
        return `${path}${searchParams}`
    }


};