import { useSelector } from "react-redux";
import { selectOpenedMenu } from "../../app/slices/interfaceSlice";

const useSizes = () => {
  const openedMenu = useSelector(selectOpenedMenu);

  // Precisa ficar aqui e não diretamente em um determinado style
  // por que vários componentes diferentes levam em consideração
  // essa propriedade para se ajustar.
  const sidebarWidth = openedMenu ? "280px" : "80px";

  return { sidebarWidth };
};

const mediaQueryBreakSearch = "895px";
const mediaQueryBreakSidebar = "610px";
const mediaQueryBreakLogoType = "470px";
const headerHeight = "64px";

export {
  useSizes,
  headerHeight,
  mediaQueryBreakSearch,
  mediaQueryBreakSidebar,
  mediaQueryBreakLogoType,
};
