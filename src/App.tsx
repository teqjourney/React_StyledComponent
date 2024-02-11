import "./assets/css/App.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./layout.tsx";
import { Home } from "./pages/Home";
import { Send } from "./pages/Send";
import { Community } from "./pages/Community";
import { Past } from "./pages/Past";
import { Analytics } from "./pages/Analytics";
import { Setting } from "./pages/Setting";
import { Help } from "./pages/Help";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/send" element={<Send />} />
      <Route path="/community" element={<Community />} />
      <Route path="/past" element={<Past />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/help" element={<Help />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
