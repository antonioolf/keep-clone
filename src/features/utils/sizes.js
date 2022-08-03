import { useSelector } from 'react-redux';
import { selectOpenedMenu } from '../../app/slices/interfaceSlice';

const useSizes = () => {
    const openedMenu = useSelector(selectOpenedMenu);

    // Precisa ficar aqui e não diretamente em um determinado style
    // por que vários componentes diferentes levam em consideração 
    // essa propriedade para se ajustar.
    const sidebarWidth = openedMenu ? '280px' : '80px';
    
    const headerHeight = '64px';

    return {
        sidebarWidth,
        headerHeight
    };
}


export { useSizes };