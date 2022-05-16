import { GridHelper } from "three";

const createGridHelper = () => {
    const gridHelper = new GridHelper(9, 9);

    return gridHelper;
}

export default createGridHelper;

