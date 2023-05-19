import { Route, Routes } from 'react-router-dom';

import About from 'src/components/about';
import Blog from 'src/components/blog';
import Landing from 'src/components/landing';
const Routing: React.FC<any> = () => {
  return (
    <>
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/blog" Component={Blog} />
        <Route path="/" Component={Landing} />
      </Routes>
    </>
  );
};

export default Routing;
