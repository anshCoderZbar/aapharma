import { Layout } from "app/images";
import { SidebarData } from "app/mock/sidebar";
import { ChevronLeft, Link2, Users2Icon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetAllRoutesMutation } from "rest/allRoutes";

export const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const routes = GetAllRoutesMutation();
  return (
    <div
      className={`dashboard_sidebar ${sidebarActive ? "dashboard_active" : ""}`}
    >
      <div
        className="menu_icon"
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <ChevronLeft />
      </div>
      <Link to={"/dashboard"} className="logo">
        <img src={Layout?.LOGO} alt="logo" />
      </Link>

      <div className="nav-links">
        <p>Pages</p>
        <ul className="nav-items">
          <li
            className={`${
              window?.location?.pathname?.toLowerCase()?.includes("all-routes")
                ? "side_active"
                : ""
            }`}
          >
            <Link to={`/all-routes`}>
              <Link2 />
              Page Routes
            </Link>
          </li>
          <li
            className={`${
              window?.location?.pathname?.toLowerCase()?.includes("all-admin")
                ? "side_active"
                : ""
            }`}
          >
            <Link to={`/all-admin`}>
              <Users2Icon />
              Admin
            </Link>
          </li>
        </ul>
        <p>Main</p>
        <ul className="nav-items">
          <div className="accordion b-yxs" id={`accordionExample`}>
            {routes?.data?.data?.length >= 1 &&
              routes?.data?.data?.map((menu) => (
                <div key={menu?.id} className="accordion-item">
                  <Link
                    className={`${
                      menu?.subMenuArray?.length >= 1
                        ? "accordion-button collapsed"
                        : ""
                    }`}
                    data-bs-toggle="collapse"
                    data-bs-target={`${`#collapse_${menu?.id}`}`}
                    aria-expanded="false"
                    aria-controls={`${`collapse_${menu?.id}`}`}
                    onClick={(event) => event.preventDefault()}
                  >
                    <img
                      src={menu?.Icon}
                      alt="icons"
                      style={{ width: "20px" }}
                    />{" "}
                    {menu?.Name}
                  </Link>
                  <div
                    id={`collapse_${menu?.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        {menu?.subMenuArray?.map((elm, j) => (
                          <li
                            className={`submenu_vs ${
                              window?.location?.pathname
                                ?.toLowerCase()
                                ?.includes(elm?.slug?.toLowerCase())
                                ? "side_active"
                                : ""
                            }`}
                            key={j}
                          >
                            <Link className={`x`} to={`/${elm?.slug}`}>
                              {elm?.subMenu}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

// import { Layout } from "app/images";
// import { SidebarData } from "app/mock/sidebar";
// import { ChevronLeft, Link2 } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export const Sidebar = () => {
//   const [sidebarActive, setSidebarActive] = useState(false);

//   return (
//     <div
//       className={`dashboard_sidebar ${sidebarActive ? "dashboard_active" : ""}`}
//     >
//       <div
//         className="menu_icon"
//         onClick={() => setSidebarActive(!sidebarActive)}
//       >
//         <ChevronLeft />
//       </div>
//       <Link to={"/dashboard"} className="logo">
//         <img src={Layout?.LOGO} alt="logo" />
//       </Link>

//       <div className="nav-links">
//         <p>Pages</p>
//         <ul className="nav-items">
//           <li
//             className={`${
//               window?.location?.pathname?.toLowerCase()?.includes("all-routes")
//                 ? "side_active"
//                 : ""
//             }`}
//           >
//             <Link to={`/all-routes`}>
//               <Link2 />
//               Page Routes
//             </Link>
//           </li>
//         </ul>
//         <p>Main</p>
//         <ul className="nav-items">
//           <div>
//             <ul>
//               {SidebarData?.map((elm, i) => {
//                 return (
//                   !elm?.subMenu && (
//                     <li
//                       key={i}
//                       className={`${
//                         window?.location?.pathname
//                           ?.toLowerCase()
//                           ?.includes(elm?.slug?.toLowerCase())
//                           ? "side_active"
//                           : ""
//                       }`}
//                     >
//                       <Link to={`/${elm?.slug}`}>
//                         {" "}
//                         {elm?.icon}
//                         {elm?.name}
//                       </Link>
//                     </li>
//                   )
//                 );
//               })}
//             </ul>
//           </div>
//           <div className="accordion b-yxs" id={`accordionExample`}>
//             {SidebarData?.map(
//               (menu) =>
//                 menu?.subMenu && (
//                   <div key={menu?.id} className="accordion-item">
//                     <Link
//                       className={`${
//                         menu?.subMenu?.length >= 1
//                           ? "accordion-button collapsed"
//                           : ""
//                       }`}
//                       data-bs-toggle="collapse"
//                       data-bs-target={`${`#collapse_${menu?.id}`}`}
//                       aria-expanded="false"
//                       aria-controls={`${`collapse_${menu?.id}`}`}
//                       onClick={(event) => event.preventDefault()}
//                     >
//                       {menu?.icon} {menu?.name}
//                     </Link>
//                     <div
//                       id={`collapse_${menu?.id}`}
//                       className="accordion-collapse collapse"
//                       data-bs-parent="#accordionExample"
//                     >
//                       <div className="accordion-body">
//                         <ul>
//                           {menu?.subMenu?.map((elm, j) => (
//                             <li
//                               className={`submenu_vs ${
//                                 window?.location?.pathname
//                                   ?.toLowerCase()
//                                   ?.includes(elm?.slug?.toLowerCase())
//                                   ? "side_active"
//                                   : ""
//                               }`}
//                               key={j}
//                             >
//                               <Link className={`x`} to={`/${elm?.slug}`}>
//                                 {elm?.subMenuName}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 )
//             )}
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// };
