import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";
import {McButton} from "@/components/ui/mcbutton";

export const mcbutton = {
  name: "mcbutton",
  components: {
    Default: (
      <McButton>
        Hello world
      </McButton>
    )
  },
};
