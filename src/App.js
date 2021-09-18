import React from 'react';
import Amazon from './amazon';
import Netflix from './Netflix';


const favSeries = 'netflix';


const App = () => (
  <>
  <h1 className="heading_style">List Of Top 4 Netflix Series</h1>
{ (favSeries === 'netflix') ?  <Netflix/>: <Amazon/>}
  </>
);

export default App;
