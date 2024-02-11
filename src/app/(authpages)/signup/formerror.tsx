import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";

const FormError = (props: { label: string }) => {
  if (!props.label) return null;

  return (
    <div className="flex p-3 bg-destructive text-white rounded-md h-10 items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p> {props.label}</p>
    </div>
  );
};

export default FormError;
