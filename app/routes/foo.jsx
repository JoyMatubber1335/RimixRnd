// export default function foo() {
//   return <div style={{ width: 200, height: 200, background: "red" }}></div>;
// }

import { Outlet } from "@remix-run/react";

// import React from 'react'

// export const foo = () => {
//   return <div style={{ width: 200, height: 200, background: "red" }}></div>;
// };

// import React from 'react'

const Foo = () => {
  return (
    <div style={{ width: 200, height: 200, background: "green" }}>
      <Outlet />
    </div>
  );
};

export default Foo;
