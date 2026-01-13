import yinhsun from '../assets/yinhsun980.jpg';

const Sidebar = () => {

  return (
    <>
    {/* Sidebar with image */}
    <nav className="sidebar hide-medium hide-small" style={{ width: "40%" }}>
      <div className="bgimg" style={{ backgroundImage: `url(${yinhsun})` }}></div>
    </nav>
    </>
  );
}

export default Sidebar
