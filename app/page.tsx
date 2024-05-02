import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero-img 1.svg";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col mt-20">
      <div>
        <Badge className="w-fit font-normal" variant={"secondary"}>
          Workplace Insights
        </Badge>

        <div className="flex my-3 justify-between">
          <div className="flex flex-col gap-9">
            <h1 className="font-semibold text-5xl">
              Understand your <br />
              company. Improve <br /> your workplace.
            </h1>
            <p className="text-xl font-light max-w-sm">
              Actionable insights for your team. Workplace Insights provides a
              platform for employees to share their experiences and for
              employers to gain valuable feedback.
            </p>
          </div>

          <Image src={HeroImage} alt="hero" />
        </div>

        <div className="flex gap-7">
          <Button>Sign Up</Button>
          <Button variant="outline">Write a Review</Button>
        </div>
      </div>

      <div className="flex my-44 gap-16">
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="w-fit font-normal">
            Insights
          </Badge>
          <h2 className="font-semibold text-4xl">
            Unlock the potential of your team with actionable insights.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="w-fit font-normal">
            Trust
          </Badge>
          <p>
            Workplace Insights is designed to ensure the highest level of trust
            and anonymity. Employees can express their opinions without fear,
            and employers can use the feedback to create a better work
            environment.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
