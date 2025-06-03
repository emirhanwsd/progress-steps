import {
  FlagIcon,
  SparkleIcon,
  UserIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { Fragment, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Your details",
    text: "Name and email",
    icon: UserIcon,
  },
  {
    id: 2,
    title: "Company details",
    text: "Website and location",
    icon: FlagIcon,
  },
  {
    id: 3,
    title: "Invite your team",
    text: "Start collaborating",
    icon: UsersIcon,
  },
  {
    id: 4,
    title: "Add your socials",
    text: "Automatic sharing",
    icon: SparkleIcon,
  },
];

const ProgressSteps = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative isolate">
        <div className="grid grid-cols-1 gap-x-4 gap-y-1 lg:grid-cols-4">
          {steps.map((step) => (
            <Fragment key={step.id}>
              <div
                aria-current={step.id === currentStep}
                aria-disabled={step.id > currentStep}
                className="flex gap-x-4 transition-opacity not-lg:not-aria-current:opacity-60 aria-disabled:opacity-60 lg:block lg:space-y-4"
              >
                <div className="shrink-0">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-gray-300 bg-white shadow-xs lg:mx-auto">
                    <step.icon
                      size={24}
                      weight="bold"
                      className="text-gray-700"
                    />
                  </div>
                </div>

                <div className="lg:text-center">
                  <div className="lg:space-y-0.5">
                    <h6 className="font-semibold text-gray-700">
                      {step.title}
                    </h6>

                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>
              </div>

              {step.id < steps.length && (
                <div className="block lg:hidden">
                  <div className="ml-6">
                    <div className="h-6 w-0.5 -translate-x-1/2 bg-gray-200" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="absolute inset-0 top-6 -z-10 hidden lg:block">
          <div className="relative mx-auto max-w-3xl">
            <div className="h-0.5 bg-gray-200" />

            <div
              style={{
                width: `${(100 / steps.length) * currentStep}%`,
              }}
              className="absolute inset-0 rounded-r-full bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
