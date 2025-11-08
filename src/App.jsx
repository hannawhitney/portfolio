import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import PortfolioDetailPage from "./pages/PortfolioDetail";
import ExperiencePage from "./pages/Experience";

function App() {
  const projectDetailLoader = async ({ params }) => {
    const { projectId } = params;

    const response = await fetch(
      `https://hannawhitney-portfolio-default-rtdb.firebaseio.com/projects/${projectId}.json`
    );

    if (!response.ok) {
      throw new Response("Could not fetch project.", { status: 500 });
    }

    const data = await response.json();
    return data;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        {path: "experience", element:<ExperiencePage/>},
        {
          path: "portfolio",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <PortfolioPage />,
            },
            {
              path: ":projectId",
              element: <PortfolioDetailPage />,
              loader: projectDetailLoader,
            },
          ],
        },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
