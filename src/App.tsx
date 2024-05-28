import { BrowserRouter, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function App() {
  return (
    <BrowserRouter>
      <Button as={Link} target={"_blank"} to={"https://google.com"}>
        Hello
      </Button>
    </BrowserRouter>
  );
}
