import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
