/* global Madeleine */
import React, { useEffect } from 'react';
declare const Madeleine: any;

const STLViewer = ({ path }) => {
  useEffect(() => {
    window.onload = function() {
      // Source: http://www.thingiverse.com/thing:520394
      // Ducati Desmosedici Superbike by IlRazzo, published Oct 29, 2014
      // Source: http://www.thingiverse.com/thing:520393
      // Lamborghini Gallardo by IlRazzo, published Oct 29, 2014
      new Madeleine({
        target: 'target',
        data: path,
        type: 'file',
      });
    };
  }, [path]);

  return <div id="target"></div>;
};

export default STLViewer;
