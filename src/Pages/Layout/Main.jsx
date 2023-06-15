
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <Outlet></Outlet>

    </div>
  );
};

export default Main;