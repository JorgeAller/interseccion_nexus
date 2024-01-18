import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
    return (
      <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    );
  };
  
  export default App;
