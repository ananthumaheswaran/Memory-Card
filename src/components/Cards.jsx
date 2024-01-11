import EasyLevel from "../pages/EasyLevel";
import MediumLevel from "../pages/MediumLevel";
import HardLevel from "../pages/HardLevel";

const Cards = () => {
  return (
    <div className="menu">
      <EasyLevel />
      <MediumLevel />
      <HardLevel />
    </div>
  );
};

export default Cards;
