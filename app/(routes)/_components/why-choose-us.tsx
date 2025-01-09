// components
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// types
import { WhyChooseUProps } from "@/data/types";

const WhyChooseUs = ({ icon, title, description }: WhyChooseUProps) => {
  return (
    <Card className="border bg-card text-card-foreground shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
      {icon && icon}
      <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-neutral-600">
        {title}
      </CardTitle>
      <CardDescription className="text-sm text-muted-foreground text-center">
        {description}
      </CardDescription>
    </Card>
  );
};

export default WhyChooseUs;
