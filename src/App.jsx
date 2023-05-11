import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Welcome</h1>
            <Button
                onClick={() => setCount((count) => count + 1)}
            >
                count is {count}
            </Button>
            <Outlet />
        </>
    );
}

export default App;
